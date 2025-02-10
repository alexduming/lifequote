/**
 * 管理员语录审核页面
 * @module AdminQuotesPage
 */

'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { useRouter } from 'next/navigation';
import { Check, X, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import { useSupabase } from '@/contexts/SupabaseContext';
import { Button } from '@/components/ui/button';
import { Spinner } from "@/components/ui/spinner";

interface PendingQuote {
  id: string;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  status: 'pending' | 'approved' | 'rejected';
  submitted_by: string | null;
  submitter_email: string | null;
  created_at: string;
}

export default function AdminQuotesPage() {
  const { user } = useAuth();
  const { supabase } = useSupabase();
  const { language } = useLanguage();
  const [quotes, setQuotes] = useState<PendingQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [translating, setTranslating] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingQuotes = async () => {
      if (!supabase) {
        console.error('Supabase client not initialized');
        toast.error('数据库连接失败');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('pending_quotes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        const formattedQuotes = data?.map(quote => ({
          ...quote,
          submitted_by: {
            email: quote.submitter_email
          }
        })) || [];
        
        setQuotes(formattedQuotes);
      } catch (error) {
        console.error('获取待审核语录失败:', error);
        toast.error('获取待审核语录失败');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingQuotes();
  }, [supabase]);

  const handleApprove = async (quoteId: string) => {
    if (!supabase) {
      toast.error('数据库连接失败');
      return;
    }

    try {
      const { error } = await supabase
        .from('quotes')
        .update({
          status: 'approved',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', quoteId);

      if (error) throw error;

      setQuotes(quotes.filter(q => q.id !== quoteId));
      toast.success('语录已通过审核');
    } catch (error) {
      console.error('审核失败:', error);
      toast.error('审核失败');
    }
  };

  const handleReject = async (quoteId: string) => {
    if (!supabase) {
      toast.error('数据库连接失败');
      return;
    }

    try {
      const { error } = await supabase
        .from('quotes')
        .update({
          status: 'rejected',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', quoteId);

      if (error) throw error;

      setQuotes(quotes.filter(q => q.id !== quoteId));
      toast.success('语录已拒绝');
    } catch (error) {
      console.error('拒绝失败:', error);
      toast.error('操作失败');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        <h1 className="text-4xl font-bold text-white mb-8">待审核语录</h1>
        
        {loading ? (
          <div className="text-center">
            <Spinner className="w-8 h-8 text-pink-500" />
          </div>
        ) : quotes.length === 0 ? (
          <div className="text-center text-white/60">
            暂无待审核的语录
          </div>
        ) : (
          <div className="space-y-6">
            {quotes.map((quote) => (
              <div key={quote.id} className="bg-white rounded-xl p-6">
                <div className="mb-4">
                  <p className="text-lg mb-2">
                    {language === 'zh' ? quote.quote_zh : quote.quote_en}
                  </p>
                  <p className="text-sm text-gray-500">
                    —— {language === 'zh' ? quote.author_zh : quote.author_en}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    提交者: {quote.submitter_email || '未知用户'}
                  </div>
                  <div className="space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => handleReject(quote.id)}
                    >
                      拒绝
                    </Button>
                    <Button
                      onClick={() => handleApprove(quote.id)}
                    >
                      通过
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 