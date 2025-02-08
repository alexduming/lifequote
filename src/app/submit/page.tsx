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

/**
 * 语录提交表单类型
 */
interface FormData {
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string;
  author_title_en: string;
  category: string;
  source: string;
  notes: string;
}

/**
 * 语录提交页面组件
 * @returns {JSX.Element} 语录提交页面
 */
export default function SubmitQuotePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    quote_zh: '',
    quote_en: '',
    author_zh: '',
    author_en: '',
    author_title_zh: '',
    author_title_en: '',
    category: '',
    source: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, supabase } = useAuth();
  const router = useRouter();

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 验证必填字段
    if (!formData.quote_zh || !formData.quote_en) {
      toast.error('请填写中英文语录');
      return;
    }
    if (!formData.author_zh || !formData.author_en) {
      toast.error('请填写作者中英文名');
      return;
    }
    if (!formData.author_title_zh || !formData.author_title_en) {
      toast.error('请填写作者头衔');
      return;
    }
    if (!formData.category) {
      toast.error('请选择分类');
      return;
    }

    try {
      // 提交语录
      const { error: submitError } = await supabase
        .from('quotes')
        .insert({
          ...formData,
          submitted_by: user?.id,
          status: 'pending', // 新提交的语录需要审核
        });

      if (submitError) throw submitError;

      // 提交成功，跳转到首页
      router.push('/');
      toast.success('语录提交成功，等待审核');
      // 重置表单
      setFormData({
        quote_zh: '',
        quote_en: '',
        author_zh: '',
        author_en: '',
        author_title_zh: '',
        author_title_en: '',
        category: '',
        source: '',
        notes: ''
      });
    } catch (err: any) {
      console.error('提交语录失败:', err.message);
      setError(err.message);
      toast.error('提交失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 处理表单字段更新
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        {/* 页面标题 */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-[oswald] font-bold text-white mb-4">
            {t.submit.title}
          </h1>
          <p className="text-white/60">
            感谢您为 LifeQuote 贡献新的语录。请确保提供准确的中英文内容和作者信息。
          </p>
        </div>

        {/* 提交表单 */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
          {/* 语录内容 */}
          <div className="grid gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t.submit.quoteZh} *
              </label>
              <textarea
                name="quote_zh"
                value={formData.quote_zh}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={t.submit.quoteZhPlaceholder}
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                {t.submit.quoteEn} *
              </label>
              <textarea
                name="quote_en"
                value={formData.quote_en}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={t.submit.quoteEnPlaceholder}
                rows={3}
                required
              />
            </div>
          </div>

          {/* 作者信息 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                作者中文名 *
              </label>
              <input
                type="text"
                name="author_zh"
                value={formData.author_zh}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="请输入作者中文名"
                required
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                作者英文名 *
              </label>
              <input
                type="text"
                name="author_en"
                value={formData.author_en}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter author's name in English"
                required
              />
            </div>
          </div>

          {/* 作者头衔 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                作者中文头衔 *
              </label>
              <input
                type="text"
                name="author_title_zh"
                value={formData.author_title_zh}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="如：古罗马哲学家"
                required
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                作者英文头衔 *
              </label>
              <input
                type="text"
                name="author_title_en"
                value={formData.author_title_en}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g., Roman Philosopher"
                required
              />
            </div>
          </div>

          {/* 分类 */}
          <div>
            <label className="block text-white/60 text-sm mb-2">
              语录分类 *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="wisdom">智慧</option>
              <option value="inspiration">励志</option>
              <option value="life">人生</option>
              <option value="love">爱情</option>
              <option value="success">成功</option>
              <option value="happiness">幸福</option>
              <option value="friendship">友情</option>
              <option value="family">家庭</option>
            </select>
          </div>

          {/* 可选信息 */}
          <div className="grid gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                出处（可选）
              </label>
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="如：《沉思录》"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                备注（可选）
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="添加任何相关说明或背景信息"
                rows={3}
              />
            </div>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* 提交按钮 */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              <span>{loading ? '提交中...' : '提交语录'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 