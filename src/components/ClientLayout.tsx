'use client';

import React, { memo } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';

// 使用 memo 包装内容组件
const MemoizedContent = memo(function MemoizedContent({ children }: { children: React.ReactNode }) {
  const [forceUpdate, setForceUpdate] = React.useState(0);

  // 监听语言变化
  React.useEffect(() => {
    const handleLanguageChange = () => {
      // 强制重新渲染整个布局
      setForceUpdate(prev => prev + 1);
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  return <div key={forceUpdate}>{children}</div>;
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MemoizedContent>
        {children}
      </MemoizedContent>
    </LanguageProvider>
  );
} 