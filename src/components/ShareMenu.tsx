/**
 * 分享菜单组件
 * @module ShareMenu
 */

'use client';

import React from 'react';
import { Twitter, Facebook, Linkedin, Link2, MessageCircle, Share } from 'lucide-react';
import { toast } from 'sonner';

interface ShareMenuProps {
  url: string;
  title: string;
  text: string;
  onClose: () => void;
}

/**
 * 分享菜单组件
 * @param props - 组件属性
 */
export default function ShareMenu({ url, title, text, onClose }: ShareMenuProps) {
  const shareItems = [
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
      }
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        );
      }
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
      }
    },
    {
      name: '微博',
      icon: MessageCircle,
      onClick: () => {
        window.open(
          `http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
          '_blank'
        );
      }
    },
    {
      name: '复制链接',
      icon: Link2,
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(url);
          toast.success('链接已复制到剪贴板');
        } catch (error) {
          console.error('复制失败:', error);
          toast.error('复制失败，请重试');
        }
      }
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-[oswald] text-dark-900 flex items-center gap-2">
            <Share size={20} />
            分享
          </h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {shareItems.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <item.icon size={24} className="text-[#D70050]" />
                <span className="text-sm text-dark-600">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 