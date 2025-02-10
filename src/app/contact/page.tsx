'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { MessageSquare, MessageCircle, Globe, Mail } from 'lucide-react';
import '../icons.css';
import Image from 'next/image';

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Connect with us through various channels",
      social: {
        title: "Social Media",
        description: "Follow us on social media to stay updated"
      },
      community: {
        title: "Join Our Community",
        description: "Scan QR codes to join our WeChat groups"
      },
      contact: {
        title: "Get in Touch",
        description: "Have questions? We'd love to hear from you."
      }
    },
    zh: {
      title: "联系我们",
      subtitle: "通过以下方式与我们联系",
      social: {
        title: "社交媒体",
        description: "关注我们的社交媒体账号获取最新动态"
      },
      community: {
        title: "加入社区",
        description: "扫描二维码加入我们的微信群"
      },
      contact: {
        title: "联系方式",
        description: "如有问题，欢迎随时联系我们"
      }
    }
  };

  const t = content[language];

  const socialLinks = [
    {
      platform: "Weibo",
      name: "@Alex-大表哥",
      url: "https://weibo.com/u/1794009892",
      icon: "W",
      color: "#E6162D",
      hoverBg: "hover:bg-[#E6162D]"
    },
    {
      platform: "Xiaohongshu",
      name: "Alex大表哥",
      url: "https://www.xiaohongshu.com/user/profile/64644166000000002a0080a7",
      icon: "X",
      color: "#FF2742",
      hoverBg: "hover:bg-[#FF2742]"
    },
    {
      platform: "X",
      name: "Alexdbg",
      url: "https://x.com",
      icon: "X",
      color: "#000000",
      hoverBg: "hover:bg-black"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-white/60">
            {t.subtitle}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-[oswald] text-white mb-4">{t.social.title}</h2>
          <p className="text-white/60 mb-8">{t.social.description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all relative overflow-hidden"
              >
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${social.hoverBg}`}
                />
                <div className="relative flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ 
                      backgroundColor: `${social.color}15`,
                      color: social.color 
                    }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium">{social.platform}</div>
                    <div className="text-white/60 text-sm">{social.name}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* WeChat QR Codes */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-[oswald] text-white mb-4">{t.community.title}</h2>
          <p className="text-white/60 mb-8">{t.community.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal WeChat */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#07C160]/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#07C160]" />
                </div>
                <div>
                  <h3 className="text-xl font-[oswald] text-white">个人微信</h3>
                  <p className="text-white/60">微信内搜索添加：Alexchenzao</p>
                </div>
              </div>
              <div className="aspect-square bg-white rounded-xl p-4">
                <img
                  src="/wechatqrcode.png"
                  alt="个人微信二维码"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* WeChat Group */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#07C160]/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#07C160]" />
                </div>
                <div>
                  <h3 className="text-xl font-[oswald] text-white">交流群</h3>
                  <p className="text-white/60">备注"入群"加入AI仓鼠洞交流群</p>
                </div>
              </div>
              <div className="aspect-square bg-white rounded-xl p-4">
                <img
                  src="/wechatqrcode.png"
                  alt="微信群二维码"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-[oswald] text-white mb-4">{t.contact.title}</h2>
          <p className="text-white/60 mb-8">{t.contact.description}</p>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">
                    {language === 'en' ? 'Name' : '姓名'}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500"
                    placeholder={language === 'en' ? 'Your name' : '您的姓名'}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    {language === 'en' ? 'Email' : '邮箱'}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500"
                    placeholder={language === 'en' ? 'Your email' : '您的邮箱'}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">
                  {language === 'en' ? 'Message' : '留言'}
                </label>
                <textarea
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 h-32"
                  placeholder={language === 'en' ? 'Your message' : '您的留言'}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {language === 'en' ? 'Send Message' : '发送留言'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 