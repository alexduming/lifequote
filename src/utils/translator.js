const axios = require('axios');
const crypto = require('crypto-js');
require('dotenv').config();

const BAIDU_API_URL = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
const APP_ID = process.env.BAIDU_APP_ID;
const SECRET_KEY = process.env.BAIDU_SECRET_KEY;

/**
 * 生成百度翻译API所需的签名
 * @param {string} text - 待翻译文本
 * @param {string} salt - 随机数
 * @returns {string} 签名
 */
function generateSign(text, salt) {
    const str = APP_ID + text + salt + SECRET_KEY;
    return crypto.MD5(str).toString();
}

/**
 * 将文本翻译为中文
 * @param {string} text - 待翻译的英文文本
 * @returns {Promise<string>} 翻译后的中文文本
 */
async function translateToZh(text) {
    try {
        console.log('正在翻译文本:', text.substring(0, 50) + '...');
        
        const salt = Date.now();
        const sign = generateSign(text, salt);
        
        const params = {
            q: text,
            from: 'en',
            to: 'zh',
            appid: APP_ID,
            salt: salt,
            sign: sign
        };
        
        console.log('API参数:', {
            url: BAIDU_API_URL,
            appid: APP_ID,
            salt: salt,
            sign: sign,
            text_length: text.length
        });
        
        const response = await axios.get(BAIDU_API_URL, { params });
        console.log('API响应:', response.data);
        
        if (response.data && response.data.trans_result) {
            return response.data.trans_result[0].dst;
        }
        
        throw new Error('翻译失败: ' + JSON.stringify(response.data));
    } catch (error) {
        console.error('翻译错误:', {
            message: error.message,
            response: error.response?.data,
            text: text.substring(0, 50) + '...'
        });
        return ''; // 翻译失败时返回空字符串
    }
}

/**
 * 批量翻译文本
 * @param {Array<string>} texts - 待翻译的英文文本数组
 * @returns {Promise<Array<string>>} 翻译后的中文文本数组
 */
async function batchTranslate(texts) {
    console.log(`开始批量翻译，共 ${texts.length} 条文本`);
    const results = [];
    
    // 每20个文本一组进行翻译，避免请求过于频繁
    for (let i = 0; i < texts.length; i += 20) {
        console.log(`正在处理第 ${i + 1} 到 ${Math.min(i + 20, texts.length)} 条...`);
        const batch = texts.slice(i, i + 20);
        const translations = await Promise.all(
            batch.map(text => translateToZh(text))
        );
        results.push(...translations);
        
        // 添加延时，避免触发API限制
        if (i + 20 < texts.length) {
            console.log('等待1秒...');
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    console.log(`批量翻译完成，成功翻译 ${results.filter(r => r).length} 条`);
    return results;
}

module.exports = {
    translateToZh,
    batchTranslate
}; 