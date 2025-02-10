/**
 * 语录提交页面组件
 * @module SubmitQuotePage
 */

'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import type { CategoryKey } from '@/config/translations';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FormData {
  content: string;
  author: string;
  authorTitle: string;
  category: string;
  source: string;
}

/**
 * 语录提交页面组件
 */
export default function SubmitQuotePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    content: '',
    author: '',
    authorTitle: '',
    category: '',
    source: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, supabase } = useAuth();
  const router = useRouter();

  /**
   * 处理表单提交
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 验证必填字段
      const requiredFields = ['content', 'author', 'authorTitle'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
      if (missingFields.length > 0) {
        toast.error(language === 'zh' ? '请填写必填字段' : 'Please fill in all required fields');
        setLoading(false);
        return;
      }

      if (!formData.category) {
        toast.error(language === 'zh' ? '请选择分类' : 'Please select a category');
        setLoading(false);
        return;
      }

      // 提交语录
      const { error: submitError } = await supabase
        .from('quotes')
        .insert({
          quote_zh: language === 'zh' ? formData.content : null,
          quote_en: language === 'en' ? formData.content : null,
          author_zh: language === 'zh' ? formData.author : null,
          author_en: language === 'en' ? formData.author : null,
          author_title_zh: language === 'zh' ? formData.authorTitle : null,
          author_title_en: language === 'en' ? formData.authorTitle : null,
          category: formData.category,
          source: formData.source,
          submitted_by: user?.id,
          status: 'pending',
          language: language
        });

      if (submitError) throw submitError;

      router.push('/');
      toast.success(language === 'zh' ? '语录提交成功，等待审核' : 'Quote submitted successfully, pending review');
      
      setFormData({
        content: '',
        author: '',
        authorTitle: '',
        category: '',
        source: ''
      });

    } catch (err: any) {
      console.error('提交语录失败:', err.message);
      setError(err.message);
      toast.error(language === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-20">
        {/* 页面标题 */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-[oswald] font-bold text-dark-900 mb-4">
            {t.submit.title}
          </h1>
          <p className="text-dark-500">
            {language === 'zh' 
              ? '感谢您为 LifeQuote 贡献新的语录。我们会对您提交的内容进行审核。'
              : 'Thank you for contributing to LifeQuote. We will review your submission.'}
          </p>
        </div>

        {/* 提交表单 */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
          {/* 语录内容 */}
          <div>
            <label className="block text-dark-500 text-sm mb-2">
              {language === 'zh' ? '语录内容 *' : 'Quote Content *'}
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              className="h-32"
              placeholder={language === 'zh' ? '请输入语录内容' : 'Enter quote content'}
              required
            />
          </div>

          {/* 作者信息 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-dark-500 text-sm mb-2">
                {language === 'zh' ? '作者 *' : 'Author *'}
              </label>
              <Input
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                placeholder={language === 'zh' ? '请输入作者姓名' : 'Enter author name'}
                required
              />
            </div>
            <div>
              <label className="block text-dark-500 text-sm mb-2">
                {language === 'zh' ? '作者头衔 *' : 'Author Title *'}
              </label>
              <Input
                value={formData.authorTitle}
                onChange={(e) => setFormData(prev => ({ ...prev, authorTitle: e.target.value }))}
                placeholder={language === 'zh' ? '例如：古希腊哲学家' : 'e.g., Greek Philosopher'}
                required
              />
            </div>
          </div>

          {/* 分类 */}
          <div>
            <label className="block text-dark-500 text-sm mb-2">
              {language === 'zh' ? '语录分类 *' : 'Category *'}
            </label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder={language === 'zh' ? '请选择分类' : 'Select category'} />
              </SelectTrigger>
              <SelectContent>
                {[
                  'Wisdom', 'Inspiration', 'Life', 'Love', 'Success',
                  'Happiness', 'Friendship', 'Family', 'Education', 'Philosophy',
                  'Art', 'Science', 'Nature', 'Time', 'Change',
                  'Courage', 'Dream', 'Faith', 'Growth', 'Leadership'
                ].map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {t.categories[category.toLowerCase() as CategoryKey]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 来源 */}
          <div>
            <label className="block text-dark-500 text-sm mb-2">
              {language === 'zh' ? '语录来源' : 'Source'}
            </label>
            <Input
              value={formData.source}
              onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
              placeholder={language === 'zh' ? '如：《沉思录》第四章' : 'e.g., Meditations, Chapter 4'}
            />
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* 提交按钮 */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={loading}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send size={18} />
              {loading ? (language === 'zh' ? '提交中...' : 'Submitting...') : (language === 'zh' ? '提交语录' : 'Submit Quote')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 