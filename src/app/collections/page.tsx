/**
 * 收藏夹管理页面
 * @module CollectionsPage
 */

'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Plus, Folder, Settings, Share2, Trash2, Globe, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

/**
 * 收藏夹类型定义
 */
interface Collection {
  id: string;
  name: string;
  description: string | null;
  is_public: boolean;
  created_at: string;
  user_id: string;
  quote_count: number;
}

/**
 * 收藏夹管理页面组件
 * @returns {JSX.Element} 收藏夹管理页面
 */
export default function CollectionsPage() {
  const { user, supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState('');
  const [newCollectionDescription, setNewCollectionDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  // 加载收藏夹列表
  useEffect(() => {
    const loadCollections = async () => {
      if (!supabase) {
        console.error('数据库连接失败');
        toast.error('数据库连接失败');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('collections')
          .select('*')
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setCollections(data || []);
      } catch (error: any) {
        console.error('加载收藏夹失败:', error);
        toast.error('加载失败');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadCollections();
    } else {
      setLoading(false);
    }
  }, [user, supabase]);

  // 创建新收藏夹
  const handleCreateCollection = async () => {
    if (!supabase) {
      toast.error('数据库连接失败');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('collections')
        .insert({
          name: newCollectionName,
          description: newCollectionDescription || null,
          is_public: isPublic,
          user_id: user?.id
        })
        .select()
        .single();

      if (error) throw error;

      setCollections(prev => [{ ...data, quote_count: 0 }, ...prev]);
      setShowCreateModal(false);
      setNewCollectionName('');
      setNewCollectionDescription('');
      setIsPublic(true);
      toast.success('创建成功');
    } catch (error: any) {
      console.error('创建收藏夹失败:', error);
      toast.error('创建失败');
    }
  };

  // 删除收藏夹
  const handleDeleteCollection = async (collectionId: string) => {
    if (!supabase) {
      toast.error('数据库连接失败');
      return;
    }

    try {
      const { error } = await supabase
        .from('collections')
        .delete()
        .eq('id', collectionId);

      if (error) throw error;

      setCollections(prev => prev.filter(c => c.id !== collectionId));
      toast.success('删除成功');
    } catch (error: any) {
      console.error('删除收藏夹失败:', error);
      toast.error('删除失败');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">{t.collections.title}</h1>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            {t.collections.create}
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <Spinner className="w-8 h-8 text-pink-500 mx-auto" />
            <p className="mt-4 text-white/60">{t.common.loading}</p>
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center py-20 text-white/60">
            {t.collections.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                    {collection.description && (
                      <p className="text-white/60 text-sm">
                        {collection.description}
                      </p>
                    )}
                  </div>
                  <div className="text-white/60">
                    {collection.is_public ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <Lock className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">
                    {collection.quote_count} 条语录
                  </span>
                  <div className="space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCollection(collection.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 创建收藏夹模态框 */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-[oswald] text-white mb-6">
                {t.collections.create}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    {t.collections.name}
                  </label>
                  <input
                    type="text"
                    value={newCollectionName}
                    onChange={e => setNewCollectionName(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t.collections.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    {t.collections.description}
                  </label>
                  <textarea
                    value={newCollectionDescription}
                    onChange={e => setNewCollectionDescription(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t.collections.descriptionPlaceholder}
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={isPublic}
                    onChange={e => setIsPublic(e.target.checked)}
                    className="rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="isPublic" className="text-white/60 text-sm">
                    {t.collections.makePublic}
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="ghost"
                  onClick={() => setShowCreateModal(false)}
                >
                  {t.common.cancel}
                </Button>
                <Button
                  onClick={handleCreateCollection}
                  disabled={!newCollectionName.trim()}
                >
                  {t.common.create}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 