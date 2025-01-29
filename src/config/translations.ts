/**
 * 多语言翻译配置
 * @module translations
 */

export type Language = 'en' | 'zh';

export type CategoryKey = 'motivation' | 'life' | 'love' | 'success' | 'wisdom' | 
  'philosophy' | 'literature' | 'science' | 'art' | 'history' | 'politics' | 
  'economics' | 'education';

export type TranslationType = {
  nav: {
    home: string;
    about: string;
    contact: string;
    login: string;
    register: string;
    profile: string;
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
    stats: {
      quotes: string;
    };
    topics: {
      title: string;
      description: string;
    };
  };
  actions: {
    like: string;
    save: string;
    share: string;
    quotes: string;
    close: string;
    viewDetails: string;
    searchTopics: string;
  };
  books: {
    title: string;
    subtitle: string;
    stats: {
      books: string;
      quotes: string;
    };
  };
  search: {
    placeholder: string;
    noResults: string;
    results: string;
    viewAll: string;
    resultsFor: string;
    tryDifferent: string;
  };
  stats: {
    quotes: string;
    collections: string;
    shares: string;
  };
  author: {
    bio: string;
    achievements: string;
    quotes: string;
  };
  register: {
    title: string;
    username: string;
    email: string;
    password: string;
    submit: string;
    registering: string;
    loginLink: string;
  };
  login: {
    title: string;
    email: string;
    password: string;
    submit: string;
    loggingIn: string;
    registerLink: string;
  };
};

export const translations: Record<Language, TranslationType> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      profile: 'Profile',
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
      stats: {
        quotes: 'quotes',
      },
      topics: {
        title: 'Explore Topics',
        description: 'Discover wisdom from various fields and perspectives',
      },
    },
    actions: {
      like: 'Like',
      save: 'Save',
      share: 'Share',
      quotes: 'quotes',
      close: 'Close',
      viewDetails: 'View Details',
      searchTopics: 'Search topics...',
    },
    books: {
      title: 'Book Quotes',
      subtitle: 'Explore timeless wisdom from classic works across centuries',
      stats: {
        books: 'books',
        quotes: 'quotes',
      },
    },
    search: {
      placeholder: 'Search quotes...',
      noResults: 'No results found',
      results: 'Found %d results',
      viewAll: 'View all results',
      resultsFor: 'Search results for "%s"',
      tryDifferent: 'Try searching with different keywords',
    },
    stats: {
      quotes: 'Quotes',
      collections: 'Collections',
      shares: 'Shares',
    },
    author: {
      bio: 'Biography',
      achievements: 'Achievements',
      quotes: 'Notable Quotes',
    },
    register: {
      title: 'Create your account',
      username: 'Username',
      email: 'Email address',
      password: 'Password',
      submit: 'Register',
      registering: 'Registering...',
      loginLink: 'Already have an account? Sign in'
    },
    login: {
      title: 'Sign in to your account',
      email: 'Email address',
      password: 'Password',
      submit: 'Sign in',
      loggingIn: 'Signing in...',
      registerLink: 'Don\'t have an account? Register'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      contact: '联系',
      login: '登录',
      register: '注册',
      profile: '个人中心',
      authors: '名人语录',
      topics: '主题分类',
      daily: '每日精选',
      books: '书籍语录',
    },
    hero: {
      title: '在过去的1000年中\n那些鼓励着全人类的句子',
      subtitle: '在这里找到激励、智慧和行动指引，发现历史上最伟大思想家的智慧之言。',
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
      stats: {
        quotes: '条语录',
      },
      topics: {
        title: '探索主题',
        description: '探索不同领域和视角的智慧',
      },
    },
    actions: {
      like: '喜欢',
      save: '收藏',
      share: '分享',
      quotes: '条语录',
      close: '关闭',
      viewDetails: '查看详情',
      searchTopics: '搜索主题...',
    },
    books: {
      title: '书籍语录',
      subtitle: '探索经典著作中的智慧结晶，感受跨越时空的思想火花',
      stats: {
        books: '本书籍',
        quotes: '条语录',
      },
    },
    search: {
      placeholder: '搜索名言...',
      noResults: '未找到相关结果',
      results: '找到 %d 条结果',
      viewAll: '查看全部结果',
      resultsFor: '"%s" 的搜索结果',
      tryDifferent: '尝试使用不同的关键词搜索',
    },
    stats: {
      quotes: '条语录',
      collections: '次收藏',
      shares: '次分享',
    },
    author: {
      bio: '简介',
      achievements: '成就',
      quotes: '经典语录',
    },
    register: {
      title: '创建账号',
      username: '用户名',
      email: '邮箱地址',
      password: '密码',
      submit: '注册',
      registering: '注册中...',
      loginLink: '已有账号？点击登录'
    },
    login: {
      title: '登录账号',
      email: '邮箱地址',
      password: '密码',
      submit: '登录',
      loggingIn: '登录中...',
      registerLink: '没有账号？点击注册'
    }
  },
}; 