'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Plus, Folder, Settings, Share2, Trash2, Globe, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

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
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState('');
  const [newCollectionDescription, setNewCollectionDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const { user, supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  // 加载用户的收藏夹列表
  useEffect(() => {
    async function loadCollections() {
      if (!supabase) {
        console.error('Supabase client not initialized');
        toast.error('数据库连接失败');
        setLoading(false);
        return;
      }

      try {
        const { data, error: collectionsError } = await supabase
          .from('collections')
          .select(`
            *,
            collection_items (count)
          `)
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false });

        if (collectionsError) throw collectionsError;

        const collectionsWithCount = data?.map(collection => ({
          ...collection,
          quote_count: collection.collection_items?.[0]?.count || 0
        })) || [];

        setCollections(collectionsWithCount);
      } catch (error: any) {
        console.error('加载收藏夹失败:', error);
        toast.error('加载收藏夹失败');
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      loadCollections();
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
        {/* 页面标题 */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-[oswald] font-bold text-white">
            {t.collections.title}
          </h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Plus size={20} />
            <span>{t.collections.create}</span>
          </button>
        </div>

        {/* 收藏夹列表 */}
        {loading ? (
          <div className="text-center text-white/60">
            {t.common.loading}
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center text-white/60">
            {t.collections.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <a
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                  {collection.is_public ? (
                    <>
                      <Globe size={16} />
                      <span>公开收藏夹</span>
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      <span>私密收藏夹</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {collection.name}
                </h3>
                {collection.description && (
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                )}
                <div className="text-sm text-white/40">
                  {collection.quote_count} 条语录
                </div>
              </a>
            ))}
          </div>
        )}

        {/* 创建收藏夹模态框 */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-[oswald] text-white mb-6">
                创建新收藏夹
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    名称
                  </label>
                  <input
                    type="text"
                    value={newCollectionName}
                    onChange={e => setNewCollectionName(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="输入收藏夹名称"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    描述（可选）
                  </label>
                  <textarea
                    value={newCollectionDescription}
                    onChange={e => setNewCollectionDescription(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="添加描述"
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={isPublic}
                    onChange={e => setIsPublic(e.target.checked)}
                    className="rounded text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="isPublic" className="text-white/60 text-sm">
                    公开收藏夹
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-white/60 hover:text-white transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleCreateCollection}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  创建
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 