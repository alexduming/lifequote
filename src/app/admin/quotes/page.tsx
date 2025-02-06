/**
 * 管理员语录审核页面
 * @module AdminQuotesPage
 */

'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Check, X, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import type { CategoryKey } from '@/config/translations';

type QuoteForReview = {
  id: string;
  content_zh: string;
  content_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string;
  author_title_en: string;
  category: CategoryKey;
  source?: string;
  notes?: string;
  submitted_by: string;
  submitted_at: string;
  status: 'pending' | 'approved' | 'rejected';
};

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<QuoteForReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<QuoteForReview | null>(null);

  const { user, supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  // 检查管理员权限
  useEffect(() => {
    async function checkAdminRole() {
      if (!user) return;

      const { data: { role } } = await supabase.auth.getUser();
      if (role !== 'admin') {
        setError('没有访问权限');
        setLoading(false);
      }
    }

    checkAdminRole();
  }, [user, supabase]);

  // 加载待审核的语录
  useEffect(() => {
    async function loadPendingQuotes() {
      try {
        const { data, error: quotesError } = await supabase
          .from('quotes')
          .select('*')
          .eq('status', 'pending')
          .order('created_at', { ascending: false });

        if (quotesError) throw quotesError;

        setQuotes(data);
      } catch (err: any) {
        console.error('加载待审核语录失败:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      loadPendingQuotes();
    }
  }, [user, supabase]);

  // 审核语录
  const handleReview = async (quoteId: string, action: 'approve' | 'reject') => {
    try {
      if (action === 'reject' && !rejectionReason.trim()) {
        alert('请填写拒绝原因');
        return;
      }

      const { error: updateError } = await supabase
        .from('quotes')
        .update({
          status: action === 'approve' ? 'approved' : 'rejected',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString(),
          ...(action === 'reject' && { rejection_reason: rejectionReason.trim() })
        })
        .eq('id', quoteId);

      if (updateError) throw updateError;

      setQuotes(prev => prev.filter(q => q.id !== quoteId));
      setSelectedQuote(null);
      setRejectionReason('');
    } catch (err: any) {
      console.error('审核语录失败:', err.message);
      alert('审核失败，请重试');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
        <Navbar />
        <div className="container py-20 text-center text-white/60">
          加载中...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
        <Navbar />
        <div className="container py-20 text-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-[oswald] font-bold text-white">
            语录审核
          </h1>
          <div className="text-white/60">
            {quotes.length} 条待审核
          </div>
        </div>

        {quotes.length === 0 ? (
          <div className="text-center text-white/60 py-12">
            暂无待审核的语录
          </div>
        ) : (
          <div className="space-y-6">
            {quotes.map(quote => (
              <div
                key={quote.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-white/60 text-sm mb-2">中文内容</h3>
                    <p className="text-white text-lg">{quote.content_zh}</p>
                  </div>
                  <div>
                    <h3 className="text-white/60 text-sm mb-2">英文内容</h3>
                    <p className="text-white text-lg">{quote.content_en}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-white/60 text-sm mb-2">作者</h3>
                    <p className="text-white">
                      {quote.author_zh} ({quote.author_en})
                    </p>
                    <p className="text-white/60 text-sm">
                      {quote.author_title_zh} ({quote.author_title_en})
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white/60 text-sm mb-2">分类</h3>
                    <p className="text-white">{t.categories[quote.category]}</p>
                  </div>
                </div>

                {(quote.source || quote.notes) && (
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {quote.source && (
                      <div>
                        <h3 className="text-white/60 text-sm mb-2">出处</h3>
                        <p className="text-white">{quote.source}</p>
                      </div>
                    )}
                    {quote.notes && (
                      <div>
                        <h3 className="text-white/60 text-sm mb-2">备注</h3>
                        <p className="text-white">{quote.notes}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedQuote(quote)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <X size={18} />
                    <span>拒绝</span>
                  </button>
                  <button
                    onClick={() => handleReview(quote.id, 'approve')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Check size={18} />
                    <span>通过</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 拒绝原因模态框 */}
        {selectedQuote && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-[oswald] text-dark-900">
                  拒绝原因
                </h2>
                <button
                  onClick={() => {
                    setSelectedQuote(null);
                    setRejectionReason('');
                  }}
                  className="text-dark-400 hover:text-dark-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[150px]"
                  placeholder="请输入拒绝原因，将通知给提交者"
                />
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setSelectedQuote(null);
                      setRejectionReason('');
                    }}
                    className="px-4 py-2 text-dark-600 hover:text-dark-800 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={() => handleReview(selectedQuote.id, 'reject')}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    确认拒绝
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 