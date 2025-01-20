'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { BookOpen, Users, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About LifeQuote",
      subtitle: "Preserving and Sharing Human Wisdom Across Generations",
      mission: {
        title: "Our Mission",
        text: "To collect, preserve, and share the most profound thoughts and wisdom from history's greatest minds, making them accessible and relevant for future generations."
      },
      vision: {
        title: "Our Vision",
        text: "To become the world's most comprehensive and trusted platform for discovering and sharing timeless wisdom, inspiring millions to learn from history's greatest thinkers."
      },
      features: [
        {
          icon: BookOpen,
          title: "Curated Wisdom",
          description: "Carefully selected quotes from history's most influential thinkers, philosophers, scientists, and artists."
        },
        {
          icon: Users,
          title: "Global Community",
          description: "A vibrant community of wisdom seekers sharing insights and discovering new perspectives."
        },
        {
          icon: Globe,
          title: "Multilingual Access",
          description: "Breaking language barriers to make wisdom accessible to people worldwide."
        },
        {
          icon: Sparkles,
          title: "Daily Inspiration",
          description: "Delivering carefully chosen quotes daily to inspire and enlighten."
        }
      ],
      story: {
        title: "Our Story",
        text: "LifeQuote began with a simple yet powerful idea: to create a digital treasury of human wisdom. We believe that the insights of great thinkers throughout history can provide guidance, inspiration, and understanding for contemporary challenges. By combining advanced technology with careful curation, we've created a platform that makes centuries of wisdom accessible to everyone."
      },
      impact: {
        title: "Our Impact",
        text: "Every day, thousands of people from around the world discover new insights and inspiration through LifeQuote. We're not just sharing quotes; we're preserving and transmitting the collective wisdom of humanity for future generations."
      }
    },
    zh: {
      title: "关于 LifeQuote",
      subtitle: "传承人类智慧，跨越千年时光",
      mission: {
        title: "我们的使命",
        text: "收集、保存并分享历史上最伟大思想家的深邃思考和智慧，让这些珍贵的思想财富能够跨越时空，启迪后世。"
      },
      vision: {
        title: "我们的愿景",
        text: "成为全球最全面、最值得信赖的智慧语录平台，激励数百万人从历史上最伟大的思想家那里汲取智慧。"
      },
      features: [
        {
          icon: BookOpen,
          title: "精心策划",
          description: "精选历史上最具影响力的思想家、哲学家、科学家和艺术家的智慧语录。"
        },
        {
          icon: Users,
          title: "全球社区",
          description: "汇聚充满求知欲的智慧社区，分享见解，探索新视角。"
        },
        {
          icon: Globe,
          title: "多语言支持",
          description: "打破语言障碍，让智慧触达全球每一个角落。"
        },
        {
          icon: Sparkles,
          title: "每日灵感",
          description: "每天精选富有启发性的语录，为您带来持续的智慧之光。"
        }
      ],
      story: {
        title: "我们的故事",
        text: "LifeQuote 始于一个简单而有力的想法：创建一个人类智慧的数字宝库。我们相信，历史上伟大思想家的见解可以为当代挑战提供指导、灵感和理解。通过将先进技术与精心策划相结合，我们打造了一个让数百年智慧触手可及的平台。"
      },
      impact: {
        title: "我们的影响",
        text: "每一天，来自世界各地的数千人通过 LifeQuote 发现新的见解和灵感。我们不仅仅是在分享语录，更是在为后代保存和传递人类的集体智慧。"
      }
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
          <p className="text-xl text-white/60">
            {t.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-[oswald] text-white mb-4">{t.mission.title}</h2>
            <p className="text-white/60">{t.mission.text}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-[oswald] text-white mb-4">{t.vision.title}</h2>
            <p className="text-white/60">{t.vision.text}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <Icon size={32} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-[oswald] text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Story & Impact */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-[oswald] text-white mb-4">{t.story.title}</h2>
            <p className="text-white/60">{t.story.text}</p>
          </div>
          <div>
            <h2 className="text-2xl font-[oswald] text-white mb-4">{t.impact.title}</h2>
            <p className="text-white/60">{t.impact.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 