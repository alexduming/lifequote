'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { Lock, Eye, Database, Shield } from 'lucide-react';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "How we protect and handle your information",
      lastUpdated: "Last Updated: March 2024",
      sections: [
        {
          icon: Database,
          title: "Information We Collect",
          content: "We collect information that you provide directly to us, such as your email address when you subscribe to our newsletter. We also automatically collect certain information about your device when you use our services, including your IP address and browser type, to improve our service quality."
        },
        {
          icon: Eye,
          title: "How We Use Your Information",
          content: "We use the information we collect to provide and improve our services, send you newsletters and updates, analyze usage patterns, and ensure platform security. We never sell your personal information to third parties."
        },
        {
          icon: Lock,
          title: "Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted during transmission and storage."
        },
        {
          icon: Shield,
          title: "Your Rights",
          content: "You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving our newsletters. Contact us if you wish to exercise any of these rights."
        }
      ]
    },
    zh: {
      title: "隐私政策",
      subtitle: "我们如何保护和处理您的信息",
      lastUpdated: "最后更新时间：2024年3月",
      sections: [
        {
          icon: Database,
          title: "我们收集的信息",
          content: "我们收集您直接提供给我们的信息，例如订阅新闻通讯时的电子邮件地址。我们还会自动收集有关您使用我们服务时的设备信息，包括 IP 地址和浏览器类型，以改善我们的服务质量。"
        },
        {
          icon: Eye,
          title: "我们如何使用您的信息",
          content: "我们使用收集的信息来提供和改进服务、发送新闻通讯和更新、分析使用模式并确保平台安全。我们绝不会将您的个人信息出售给第三方。"
        },
        {
          icon: Lock,
          title: "数据安全",
          content: "我们采取适当的技术和组织措施来保护您的个人信息免受未经授权的访问、更改、披露或破坏。所有数据在传输和存储过程中都会进行加密。"
        },
        {
          icon: Shield,
          title: "您的权利",
          content: "您有权随时访问、更正或删除您的个人信息。您还可以选择不接收我们的新闻通讯。如果您希望行使这些权利，请联系我们。"
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

        {/* Privacy Sections */}
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