import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'zh';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en', // 设置默认语言为英文
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage', // localStorage 的 key
    }
  )
);

// 导出便捷的 hook
export const useLanguage = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  return { language, setLanguage };
}; 