/**
 * 收藏夹编辑模态框组件
 * @module EditCollectionModal
 */

'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { X } from 'lucide-react';

interface EditCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; description: string; isPublic: boolean }) => void;
  initialData?: {
    name: string;
    description: string;
    isPublic: boolean;
  };
  mode: 'create' | 'edit';
}

export default function EditCollectionModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode
}: EditCollectionModalProps) {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [isPublic, setIsPublic] = useState(initialData?.isPublic || false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(t.collections.errors.nameRequired);
      return;
    }

    onSubmit({ name, description, isPublic });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 animate-scale">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-[oswald] text-dark-900">
            {mode === 'create' ? t.collections.create : t.collections.edit}
          </h2>
          <button
            onClick={onClose}
            className="text-dark-400 hover:text-dark-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-dark-700">
              {t.collections.name}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder={t.collections.namePlaceholder}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-dark-700">
              {t.collections.description}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[100px]"
              placeholder={t.collections.descriptionPlaceholder}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isPublic"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="isPublic" className="text-sm text-dark-700">
              {t.collections.makePublic}
            </label>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-dark-600 hover:text-dark-800 transition-colors"
            >
              {t.actions.cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {mode === 'create' ? t.actions.create : t.actions.save}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 