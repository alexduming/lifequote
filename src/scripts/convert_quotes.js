const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { batchTranslate } = require('../utils/translator');

/**
 * 将作者名字转换为中文
 * @param {string} englishName - 英文名字
 * @returns {string} 中文名字
 */
function getChineseName(englishName) {
    // 这里可以添加更多的名字映射
    const nameMap = {
        'Oscar Wilde': '奥斯卡·王尔德',
        'Marilyn Monroe': '玛丽莲·梦露',
        'Albert Einstein': '阿尔伯特·爱因斯坦',
        'Mark Twain': '马克·吐温',
        'Maya Angelou': '玛雅·安杰洛',
        'C.S. Lewis': 'C.S.路易斯',
        'Martin Luther King Jr.': '马丁·路德·金',
        'William Shakespeare': '威廉·莎士比亚',
        'Ralph Waldo Emerson': '拉尔夫·沃尔多·爱默生',
        'Friedrich Nietzsche': '弗里德里希·尼采',
        'Mahatma Gandhi': '圣雄甘地',
        'Mother Teresa': '特蕾莎修女',
        'Jane Austen': '简·奥斯汀',
        'Virginia Woolf': '弗吉尼亚·伍尔夫',
        'Ernest Hemingway': '欧内斯特·海明威',
        'John Lennon': '约翰·列侬',
        'Pablo Picasso': '巴勃罗·毕加索',
        'Vincent Van Gogh': '文森特·梵高',
        'Leonardo da Vinci': '列奥纳多·达·芬奇',
        'Aristotle': '亚里士多德',
        'Plato': '柏拉图',
        'Socrates': '苏格拉底'
    };
    return nameMap[englishName] || englishName;
}

/**
 * 获取作者头衔
 * @param {string} authorName - 作者名字
 * @returns {Object} 包含中英文头衔的对象
 */
function getAuthorTitle(authorName) {
    // 这里可以添加更多的头衔映射
    const titleMap = {
        'Oscar Wilde': { zh: '作家、诗人', en: 'Writer and Poet' },
        'Marilyn Monroe': { zh: '演员', en: 'Actress' },
        'Albert Einstein': { zh: '物理学家', en: 'Physicist' },
        'William Shakespeare': { zh: '剧作家、诗人', en: 'Playwright and Poet' },
        'Ralph Waldo Emerson': { zh: '作家、哲学家', en: 'Writer and Philosopher' },
        'Friedrich Nietzsche': { zh: '哲学家', en: 'Philosopher' },
        'Mahatma Gandhi': { zh: '印度国父、思想家', en: 'Father of India, Thinker' },
        'Mother Teresa': { zh: '慈善家、修女', en: 'Humanitarian, Nun' },
        'Jane Austen': { zh: '小说家', en: 'Novelist' },
        'Virginia Woolf': { zh: '作家、评论家', en: 'Writer and Critic' },
        'Ernest Hemingway': { zh: '小说家、记者', en: 'Novelist and Journalist' },
        'John Lennon': { zh: '音乐家、和平主义者', en: 'Musician and Peace Activist' },
        'Pablo Picasso': { zh: '画家、雕塑家', en: 'Painter and Sculptor' },
        'Vincent Van Gogh': { zh: '画家', en: 'Painter' },
        'Leonardo da Vinci': { zh: '艺术家、科学家', en: 'Artist and Scientist' },
        'Aristotle': { zh: '哲学家', en: 'Philosopher' },
        'Plato': { zh: '哲学家', en: 'Philosopher' },
        'Socrates': { zh: '哲学家', en: 'Philosopher' }
    };
    return titleMap[authorName] || { zh: '作家', en: 'Writer' };
}

/**
 * 获取语录分类
 * @param {string[]} tags - 标签数组
 * @returns {string} 分类
 */
function getCategory(tags) {
    const categoryMap = {
        'love': 'love',
        'life': 'life',
        'philosophy': 'philosophy',
        'wisdom': 'wisdom',
        'friendship': 'friendship',
        'inspirational': 'motivation',
        'hope': 'motivation',
        'success': 'motivation',
        'happiness': 'life',
        'poetry': 'literature',
        'art': 'art',
        'science': 'science',
        'education': 'education',
        'peace': 'peace',
        'humor': 'humor'
    };
    
    if (!tags) return 'wisdom';
    const tagArray = tags.split(',').map(tag => tag.trim());
    for (const tag of tagArray) {
        if (categoryMap[tag]) {
            return categoryMap[tag];
        }
    }
    return 'wisdom';
}

/**
 * 获取时期信息
 * @param {string} authorName - 作者名字
 * @returns {Object} 包含中英文时期的对象
 */
function getPeriod(authorName) {
    const periodMap = {
        'William Shakespeare': { zh: '文艺复兴', en: 'Renaissance' },
        'Leonardo da Vinci': { zh: '文艺复兴', en: 'Renaissance' },
        'Aristotle': { zh: '古希腊', en: 'Ancient Greece' },
        'Plato': { zh: '古希腊', en: 'Ancient Greece' },
        'Socrates': { zh: '古希腊', en: 'Ancient Greece' },
        'Oscar Wilde': { zh: '维多利亚', en: 'Victorian' },
        'Mark Twain': { zh: '近代', en: 'Modern Era' }
    };
    return periodMap[authorName] || { zh: '现代', en: 'Modern Era' };
}

async function processQuotes() {
    try {
        // 创建CSV写入器
        const csvWriter = createCsvWriter({
            path: 'src/data/quotes_new.csv',
            header: [
                {id: 'id', title: 'id'},
                {id: 'quote_zh', title: 'quote_zh'},
                {id: 'quote_en', title: 'quote_en'},
                {id: 'author_zh', title: 'author_zh'},
                {id: 'author_en', title: 'author_en'},
                {id: 'author_title_zh', title: 'author_title_zh'},
                {id: 'author_title_en', title: 'author_title_en'},
                {id: 'category', title: 'category'},
                {id: 'period_zh', title: 'period_zh'},
                {id: 'period_en', title: 'period_en'},
                {id: 'likes', title: 'likes'},
                {id: 'views', title: 'views'},
                {id: 'book', title: 'book'},
                {id: 'book_en', title: 'book_en'}
            ]
        });

        // 读取现有的quotes_new.csv获取最大ID
        let maxId = 0;
        const existingQuotes = [];
        
        await new Promise((resolve, reject) => {
            fs.createReadStream('src/data/quotes_new.csv')
                .pipe(csv())
                .on('data', (row) => {
                    existingQuotes.push(row);
                    const id = parseInt(row.id);
                    if (id > maxId) maxId = id;
                })
                .on('end', resolve)
                .on('error', reject);
        });

        // 读取新的语录
        const newQuotes = [];
        const textsToTranslate = [];
        
        await new Promise((resolve, reject) => {
            fs.createReadStream('quotes/goodquotes.csv')
                .pipe(csv())
                .on('data', (row) => {
                    maxId++;
                    const authorTitle = getAuthorTitle(row.authorOrTitle);
                    const period = getPeriod(row.authorOrTitle);
                    
                    textsToTranslate.push(row.quoteText);
                    newQuotes.push({
                        id: maxId,
                        quote_en: row.quoteText,
                        author_zh: getChineseName(row.authorOrTitle),
                        author_en: row.authorOrTitle,
                        author_title_zh: authorTitle.zh,
                        author_title_en: authorTitle.en,
                        category: getCategory(row.tags),
                        period_zh: period.zh,
                        period_en: period.en,
                        likes: '0',
                        views: '0',
                        book: '',
                        book_en: ''
                    });
                })
                .on('end', resolve)
                .on('error', reject);
        });

        // 批量翻译
        console.log('开始翻译...');
        const translations = await batchTranslate(textsToTranslate);
        console.log('翻译完成！');

        // 将翻译结果添加到新语录中
        for (let i = 0; i < newQuotes.length; i++) {
            newQuotes[i].quote_zh = translations[i];
        }

        // 合并现有语录和新语录
        const allQuotes = [...existingQuotes, ...newQuotes];

        // 写入所有语录
        await csvWriter.writeRecords(allQuotes);
        console.log('已成功添加所有新语录！');
        
    } catch (error) {
        console.error('处理语录时出错:', error);
    }
}

// 执行处理
processQuotes(); 