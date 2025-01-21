export type Language = 'en' | 'zh';

export type CategoryKey = 'motivation' | 'life' | 'love' | 'success' | 'wisdom' | 
  'philosophy' | 'literature' | 'science' | 'art' | 'history' | 'politics' | 
  'economics' | 'education';

export type TranslationType = {
  nav: {
    home: string;
    authors: string;
    topics: string;
    daily: string;
    books: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  categories: {
    [K in CategoryKey]: string;
  };
  sections: {
    featured: {
      title: string;
      subtitle: string;
      viewMore: string;
    };
    explore: {
      title: string;
      subtitle: string;
    };
  };
  actions: {
    like: string;
    save: string;
    share: string;
    quotes: string;
  };
};

export const translations: Record<Language, TranslationType> = {
  en: {
    nav: {
      home: 'Home',
      authors: 'Authors',
      topics: 'Topics',
      daily: 'Daily Picks',
      books: 'Books',
    },
    hero: {
      title: 'Words That Inspired\nHumanity for 1000 Years',
      subtitle: 'Discover timeless wisdom from history\'s greatest minds. Find inspiration, motivation, and guidance.',
      searchPlaceholder: 'Search quotes, authors, or topics...',
    },
    categories: {
      motivation: 'Motivation',
      life: 'Life',
      love: 'Love',
      success: 'Success',
      wisdom: 'Wisdom',
      philosophy: 'Philosophy',
      literature: 'Literature',
      science: 'Science',
      art: 'Art',
      history: 'History',
      politics: 'Politics',
      economics: 'Economics',
      education: 'Education',
    },
    sections: {
      featured: {
        title: 'Featured Quotes',
        subtitle: 'Carefully curated quotes for daily inspiration',
        viewMore: 'View More',
      },
      explore: {
        title: 'Explore Categories',
        subtitle: 'Discover wisdom sparks from different fields',
      },
    },
    actions: {
      like: 'Like',
      save: 'Save',
      share: 'Share',
      quotes: 'quotes',
    },
  },
  zh: {
    nav: {
      home: '首页',
      authors: '名人语录',
      topics: '主题分类',
      daily: '每日精选',
      books: '书籍语录',
    },
    hero: {
      title: '在过去的1000年中\n那些鼓励着全人类的句子',
      subtitle: '发现历史上最伟大思想家的智慧之言。在这里找到激励、智慧和指引。',
      searchPlaceholder: '搜索语录、作者或主题...',
    },
    categories: {
      motivation: '励志',
      life: '生活',
      love: '爱情',
      success: '成功',
      wisdom: '智慧',
      philosophy: '哲学',
      literature: '文学',
      science: '科学',
      art: '艺术',
      history: '历史',
      politics: '政治',
      economics: '经济',
      education: '教育',
    },
    sections: {
      featured: {
        title: '精选语录',
        subtitle: '每日精心挑选的经典语录',
        viewMore: '查看更多',
      },
      explore: {
        title: '探索分类',
        subtitle: '发现不同领域的智慧火花',
      },
    },
    actions: {
      like: '喜欢',
      save: '收藏',
      share: '分享',
      quotes: '条语录',
    },
  },
}; 