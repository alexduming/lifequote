'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { Shield, Users, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Use",
      subtitle: "Please read these terms carefully before using LifeQuote",
      lastUpdated: "Last Updated: March 2024",
      sections: [
        {
          icon: Users,
          title: "User Agreement",
          content: "By accessing and using LifeQuote, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not access our service. We reserve the right to modify these terms at any time, and we'll always post the most current version on our website."
        },
        {
          icon: Shield,
          title: "Intellectual Property",
          content: "The content on LifeQuote, including but not limited to text, graphics, logos, and software, is the property of LifeQuote or its content suppliers and is protected by international copyright laws. Users may share individual quotes with proper attribution but may not reproduce, distribute, or create derivative works without explicit permission."
        },
        {
          icon: Scale,
          title: "User Conduct",
          content: "Users agree to use LifeQuote only for lawful purposes and in a way that does not infringe upon or restrict others' use and enjoyment. Prohibited activities include unauthorized access, transmission of harmful code, and any attempt to interfere with the proper functioning of the service."
        },
        {
          icon: AlertCircle,
          title: "Disclaimer",
          content: "LifeQuote provides its service on an 'as is' and 'as available' basis. While we strive for accuracy, we cannot guarantee that all content is error-free. Users rely on the information at their own risk."
        }
      ]
    },
    zh: {
      title: "使用条款",
      subtitle: "使用 LifeQuote 前请仔细阅读以下条款",
      lastUpdated: "最后更新时间：2024年3月",
      sections: [
        {
          icon: Users,
          title: "用户协议",
          content: "访问和使用 LifeQuote 即表示您同意受这些使用条款的约束。如果您不同意这些条款的任何部分，请勿使用我们的服务。我们保留随时修改这些条款的权利，并将始终在网站上发布最新版本。"
        },
        {
          icon: Shield,
          title: "知识产权",
          content: "LifeQuote 上的内容，包括但不限于文本、图形、标志和软件，均为 LifeQuote 或其内容提供商的财产，受国际版权法保护。用户可以适当注明出处分享单个语录，但未经明确许可，不得复制、分发或创作衍生作品。"
        },
        {
          icon: Scale,
          title: "用户行为",
          content: "用户同意仅将 LifeQuote 用于合法目的，且使用方式不得侵犯或限制他人的使用和享受。禁止的活动包括未经授权的访问、传输有害代码以及任何试图干扰服务正常运行的行为。"
        },
        {
          icon: AlertCircle,
          title: "免责声明",
          content: "LifeQuote 按'现状'和'可用'的基础提供服务。虽然我们努力确保准确性，但不能保证所有内容都没有错误。用户使用信息时需自行承担风险。"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-white/60 mb-4">
            {t.subtitle}
          </p>
          <p className="text-sm text-white/40">
            {t.lastUpdated}
          </p>
        </div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-[oswald] text-white">{section.title}</h2>
                </div>
                <p className="text-white/60 pl-16">{section.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 