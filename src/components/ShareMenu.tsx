/**
 * 分享菜单组件
 * @module ShareMenu
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Twitter, Facebook, Instagram, MessageCircle, Share, LucideIcon, QrCode, X, Download } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { Button } from "../components/ui/button";
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ShareMenuProps {
  url: string;
  title: string;
  text: string;
  author: string;
  book?: string;
  onClose: () => void;
}

type ShareIconType = LucideIcon | (() => JSX.Element);

interface ShareItem {
  name: string;
  icon: ShareIconType;
  onClick: () => void;
}

// 判断是否为自定义图标组件
const isCustomIcon = (icon: ShareIconType): icon is (() => JSX.Element) => {
  return typeof icon === 'function' && !('render' in icon);
};

// Logo SVG 内联数据
const LOGO_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="_图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="160" height="40">
  <defs>
    <style>
      .cls-1 {
        fill: #000;
      }
      .cls-1, .cls-2 {
        stroke-width: 0px;
      }
      .cls-2 {
        fill: #d70050;
      }
    </style>
  </defs>
  <path class="cls-1" d="M10.4,14.95h0v28.84h15.11v7.21H2v-27.65c0-4.64,3.76-8.4,8.4-8.4Z"/>
  <path class="cls-1" d="M36.89,23.51h0v27.49h-7.33v-19.25c0-4.55,3.28-8.24,7.33-8.24Z"/>
  <path class="cls-1" d="M55.99,37.52c0-1.86.34-3.61,1.03-5.25s1.65-3.07,2.9-4.29c1.25-1.22,2.73-2.19,4.45-2.9,1.72-.71,3.63-1.06,5.71-1.06s4.03.35,5.76,1.06c1.74.71,3.23,1.68,4.48,2.9,1.25,1.22,2.22,2.65,2.91,4.29.69,1.64,1.04,3.39,1.04,5.25,0,.52-.02.93-.06,1.22-.04.29-.09.59-.13.88h-20.58c.21.8.54,1.52.99,2.15.45.64.97,1.18,1.57,1.63.6.45,1.24.8,1.93,1.04.69.24,1.41.37,2.14.37,1.19,0,2.23-.25,3.11-.76s1.55-1.15,2.01-1.93h8.17c-.38,1.11-.95,2.2-1.71,3.27-.77,1.07-1.71,2.02-2.84,2.85-1.13.83-2.43,1.5-3.9,2.01-1.48.51-3.1.76-4.88.76-2.07,0-3.97-.35-5.7-1.06-1.73-.71-3.21-1.68-4.45-2.9-1.24-1.22-2.21-2.65-2.9-4.29-.69-1.64-1.04-3.38-1.04-5.22ZM70.13,30.01c-1.58,0-2.92.4-4.01,1.2-1.09.8-1.88,1.85-2.37,3.16h12.48c-.47-1.29-1.22-2.34-2.25-3.14-1.03-.81-2.31-1.21-3.84-1.21Z"/>
  <path class="cls-2" d="M209.71,37.52c0-1.86.34-3.61,1.03-5.25s1.65-3.07,2.9-4.29c1.25-1.22,2.73-2.19,4.45-2.9,1.72-.71,3.63-1.06,5.71-1.06s4.03.35,5.76,1.06c1.74.71,3.23,1.68,4.48,2.9,1.25,1.22,2.22,2.65,2.91,4.29.69,1.64,1.04,3.39,1.04,5.25,0,.52-.02.93-.06,1.22-.04.29-.09.59-.13.88h-20.58c.21.8.54,1.52.99,2.15.45.64.97,1.18,1.57,1.63.6.45,1.24.8,1.93,1.04.69.24,1.41.37,2.14.37,1.19,0,2.23-.25,3.11-.76s1.55-1.15,2.01-1.93h8.17c-.38,1.11-.95,2.2-1.71,3.27-.77,1.07-1.71,2.02-2.84,2.85-1.13.83-2.43,1.5-3.9,2.01-1.48.51-3.1.76-4.88.76-2.07,0-3.97-.35-5.7-1.06-1.73-.71-3.21-1.68-4.45-2.9-1.24-1.22-2.21-2.65-2.9-4.29-.69-1.64-1.04-3.38-1.04-5.22ZM223.86,30.01c-1.58,0-2.92.4-4.01,1.2-1.09.8-1.88,1.85-2.37,3.16h12.48c-.47-1.29-1.22-2.34-2.25-3.14-1.03-.81-2.31-1.21-3.84-1.21Z"/>
  <path class="cls-2" d="M86.6,30.79c0-1.75.23-3.43.7-5.04.47-1.61,1.13-3.11,1.99-4.52.86-1.41,1.88-2.68,3.08-3.82,1.19-1.14,2.52-2.12,3.98-2.94,1.46-.82,3.03-1.45,4.71-1.9,1.68-.44,3.43-.66,5.25-.66s3.54.22,5.22.66c1.68.44,3.25,1.07,4.72,1.9s2.8,1.8,4,2.94,2.23,2.41,3.09,3.82,1.52,2.91,1.99,4.52c.47,1.61.7,3.29.7,5.04,0,2.17-.36,4.23-1.07,6.16-.71,1.94-1.71,3.71-2.98,5.32l3.09,3.07-5.57,5.67-3.65-3.68c-1.43.76-2.95,1.34-4.55,1.75-1.6.41-3.26.61-5,.61-1.82,0-3.57-.23-5.25-.68-1.68-.45-3.25-1.08-4.71-1.9-1.46-.81-2.78-1.79-3.98-2.94-1.19-1.15-2.22-2.43-3.08-3.83-.86-1.4-1.52-2.91-1.99-4.52-.47-1.61-.7-3.29-.7-5.04ZM94.98,30.81c0,1.66.3,3.2.89,4.63.59,1.42,1.4,2.66,2.43,3.7s2.23,1.86,3.61,2.45,2.85.89,4.4.89,3.07-.3,4.45-.89,2.58-1.41,3.59-2.45c1.02-1.04,1.82-2.28,2.41-3.7.59-1.42.89-2.96.89-4.63s-.3-3.2-.89-4.63c-.59-1.42-1.4-2.66-2.41-3.7-1.02-1.04-2.21-1.86-3.59-2.45-1.38-.59-2.86-.89-4.45-.89s-3.02.3-4.4.89c-1.38.59-2.58,1.41-3.61,2.45-1.02,1.04-1.83,2.28-2.43,3.7-.59,1.42-.89,2.96-.89,4.63Z"/>
  <path class="cls-2" d="M142.51,43.91c.8,0,1.52-.11,2.15-.34.63-.23,1.18-.61,1.62-1.15.45-.54.79-1.25,1.03-2.13.24-.88.36-1.99.36-3.31v-14.37h7.29v14.63c0,2.51-.31,4.64-.94,6.38-.63,1.74-1.5,3.15-2.61,4.24-1.11,1.09-2.43,1.88-3.95,2.37s-3.17.74-4.96.74-3.44-.25-4.96-.74-2.84-1.29-3.95-2.37c-1.11-1.09-1.98-2.5-2.61-4.24-.63-1.74-.94-3.87-.94-6.38v-14.63h7.29v14.37c0,1.31.12,2.41.35,3.3.24.89.58,1.61,1.02,2.15.45.54.99.92,1.63,1.15.64.23,1.36.34,2.16.34Z"/>
  <g>
    <rect class="cls-1" x="40.76" y="23.6" width="7.33" height="27.41"/>
    <rect class="cls-1" x="47.97" y="24.24" width="7.9" height="7.33"/>
    <path class="cls-1" d="M48.1,24.23c0-4.36,3.53-7.89,7.89-7.89v-7.34c-8.41,0-15.23,6.82-15.23,15.23"/>
  </g>
  <g>
    <rect class="cls-2" x="190.56" y="17.53" width="7.33" height="18.85"/>
    <rect class="cls-2" x="197.77" y="28.4" width="7.9" height="7.33"/>
    <path class="cls-2" d="M190.56,35.75c0,8.41,6.82,15.23,15.23,15.23v-7.34c-4.36,0-7.89-3.53-7.89-7.89"/>
  </g>
  <path class="cls-2" d="M172.77,23.49c-7.6,0-13.76,6.16-13.76,13.76s6.16,13.76,13.76,13.76,13.76-6.16,13.76-13.76-6.16-13.76-13.76-13.76ZM172.77,43.66c-3.54,0-6.42-2.87-6.42-6.42s2.87-6.42,6.42-6.42,6.42,2.87,6.42,6.42-2.87,6.42-6.42,6.42Z"/>
</svg>`;

/**
 * 分享菜单组件
 * @param props - 组件属性
 */
export default function ShareMenu({ url, title, text, author, book, onClose }: ShareMenuProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const quoteCardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // 生成图片
  useEffect(() => {
    const templateElement = document.createElement('div');
    templateElement.style.position = 'absolute';
    templateElement.style.left = '-9999px';
    templateElement.style.top = '0';
    templateElement.innerHTML = `
      <div 
        style="
          width: 900px;
          height: 1200px;
          position: relative;
          background: white;
          padding: 64px;
          font-family: var(--font-oswald), sans-serif;
        "
      >
        <div style="
          position: absolute;
          top: 80px;
          left: 64px;
          font-size: 200px;
          line-height: 1;
          color: rgba(0, 0, 0, 0.05);
          font-family: sans-serif;
        ">
          "
        </div>

        <div style="height: 100%; display: flex; flex-direction: column;">
          <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
            <div style="max-width: 42rem;">
              <p style="
                font-size: 70px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 1.2;
                letter-spacing: -0.02em;
                color: rgba(0, 0, 0, 0.9);
                margin-bottom: 48px;
              ">
                ${text}
              </p>
              
              <p style="
                font-size: 40px;
                color: rgba(0, 0, 0, 0.6);
                letter-spacing: 0.05em;
              ">
                — ${author}
              </p>
            </div>
          </div>

          <div style="margin-top: auto; display: flex; justify-content: center; padding-bottom: 32px;">
            <div 
              style="width: 160px; height: 40px; display: flex; align-items: center; justify-content: center;"
              data-logo
            >${LOGO_SVG}</div>
          </div>
        </div>

        <div style="
          position: absolute;
          inset: 32px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        "></div>
      </div>
    `;

    document.body.appendChild(templateElement);

    html2canvas(templateElement.firstElementChild as HTMLElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#FFFFFF',
      width: 900,
      height: 1200,
    }).then((canvas) => {
      setImageUrl(canvas.toDataURL('image/png'));
      document.body.removeChild(templateElement);
    }).catch((error) => {
      console.error('图片生成失败:', error);
      toast.error('图片生成失败，请重试');
      document.body.removeChild(templateElement);
    });
  }, [text, author]);

  // 社交媒体分享配置
  const shareItems: ShareItem[] = [
    {
      name: 'X',
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
      name: 'Instagram',
      icon: Instagram,
      onClick: () => {
        if (!imageUrl) {
          toast.error('图片生成中，请稍后再试');
          return;
        }
        const link = document.createElement('a');
        link.download = 'lifequote.png';
        link.href = imageUrl;
        link.click();
        toast.success('图片已保存，请手动分享到 Instagram');
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
  ];

  /**
   * 保存图片到本地
   */
  const handleSaveImage = () => {
    if (!imageUrl) {
      toast.error('图片生成中，请稍后再试');
      return;
    }
    const link = document.createElement('a');
    link.download = 'lifequote.png';
    link.href = imageUrl;
    link.click();
    toast.success('图片已保存到本地');
  };

  const menuContent = (
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 999999 }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl mx-4 overflow-hidden relative">
        <div className="p-4 flex justify-end">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {imageUrl ? (
          <>
            <div className="aspect-[3/4] relative border border-gray-100">
              <img 
                src={imageUrl} 
                alt="Quote Card" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex justify-center gap-4">
              <Button
                onClick={handleSaveImage}
                className="border-2 border-[#D70050] text-[#D70050] hover:bg-[#D70050] hover:text-white transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                保存图片
              </Button>
            </div>
          </>
        ) : (
          <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center border border-gray-100">
            <span className="text-gray-400">生成中...</span>
          </div>
        )}
      </div>
    </div>
  );

  return mounted ? createPortal(menuContent, document.body) : null;
} 