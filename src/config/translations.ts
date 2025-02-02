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
    quotes: string;
    favorites: string;
    signOut: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  categories: {
    [K in CategoryKey]: string;
  };
  quotes: {
    title: string;
    filter: string;
    sort: string;
    total: string;
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
    usernamePlaceholder: string;
    email: string;
    password: string;
    passwordHint: string;
    submit: string;
    registering: string;
    loginLink: string;
    success: string;
  };
  login: {
    title: string;
    email: string;
    password: string;
    submit: string;
    signingIn: string;
    registerLink: string;
  };
  profile: {
    title: string;
    username: string;
    bio: string;
    save: string;
    saving: string;
    success: string;
  };
  favorites: {
    title: string;
    empty: string;
  };
};

export const translations: Record<Language, TranslationType> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Sign In',
      register: 'Sign Up',
      profile: 'Profile',
      authors: 'Authors',
      topics: 'Topics',
      daily: 'Daily Picks',
      books: 'Books',
      quotes: 'Quotes',
      favorites: 'Favorites',
      signOut: 'Sign Out',
    },
    hero: {
      title: 'Words That Inspired\nHumanity for 1000 Years',
      subtitle: 'Discover timeless wisdom from history\'s greatest minds.\nFind inspiration, motivation, and guidance.',
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
        subtitle: 'Discover wisdom across different domains of life and knowledge',
      },
      stats: {
        quotes: 'quotes',
      },
      topics: {
        title: 'Browse by Topics',
        description: 'Explore quotes by different topics and themes',
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
      title: 'Explore Books',
      subtitle: 'Discover wisdom from classic works',
      stats: {
        books: 'books',
        quotes: 'quotes',
      },
    },
    search: {
      placeholder: 'Search quotes, authors, or topics...',
      noResults: 'No results found',
      results: 'Found %d results',
      viewAll: 'View All Results',
      resultsFor: 'Search results for "%s"',
      tryDifferent: 'Try different keywords or browse categories',
    },
    stats: {
      quotes: 'Quotes',
      collections: 'Collections',
      shares: 'Shares',
    },
    author: {
      bio: 'Biography',
      achievements: 'Achievements',
      quotes: 'Quotes',
    },
    register: {
      title: 'Create an Account',
      username: 'Username',
      usernamePlaceholder: 'Choose a username',
      email: 'Email',
      password: 'Password',
      passwordHint: 'At least 6 characters',
      submit: 'Sign Up',
      registering: 'Signing up...',
      loginLink: 'Already have an account?',
      success: 'Registration successful! Please log in.',
    },
    login: {
      title: 'Sign In',
      email: 'Email',
      password: 'Password',
      submit: 'Sign In',
      signingIn: 'Signing in...',
      registerLink: 'Need an account?',
    },
    quotes: {
      title: 'All Quotes',
      filter: 'Filter',
      sort: 'Sort',
      total: 'quotes',
    },
    profile: {
      title: 'Profile Settings',
      username: 'Username',
      bio: 'Bio',
      save: 'Save Changes',
      saving: 'Saving...',
      success: 'Profile updated successfully!',
    },
    favorites: {
      title: 'My Favorites',
      empty: 'No favorites yet. Start adding some quotes to your favorites!',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      contact: '联系',
      login: '登录',
      register: '注册',
      profile: '个人中心',
      authors: '作者',
      topics: '主题',
      daily: '每日精选',
      books: '书籍',
      quotes: '名言',
      favorites: '收藏',
      signOut: '退出',
    },
    hero: {
      title: '在过去的1000年中\n鼓励着全人类的那些话',
      subtitle: '发现历史上最伟大思想家的永恒智慧\n获取灵感、动力与指引',
      searchPlaceholder: '搜索语录、作者或主题...',
    },
    categories: {
      motivation: '励志',
      life: '人生',
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
        subtitle: '精心策划的每日灵感',
        viewMore: '查看更多',
      },
      explore: {
        title: '探索分类',
        subtitle: '发现生活与知识领域的智慧',
      },
      stats: {
        quotes: '条语录',
      },
      topics: {
        title: '主题浏览',
        description: '按不同主题和主题探索语录',
      },
    },
    actions: {
      like: '点赞',
      save: '收藏',
      share: '分享',
      quotes: '条语录',
      close: '关闭',
      viewDetails: '查看详情',
      searchTopics: '搜索主题...',
    },
    books: {
      title: '探索书籍',
      subtitle: '发现经典著作中的智慧',
      stats: {
        books: '本书籍',
        quotes: '条语录',
      },
    },
    search: {
      placeholder: '搜索语录、作者或主题...',
      noResults: '未找到相关结果',
      results: '找到 %d 条结果',
      viewAll: '查看全部结果',
      resultsFor: '"%s" 的搜索结果',
      tryDifferent: '尝试不同的关键词或浏览分类',
    },
    stats: {
      quotes: '语录',
      collections: '收藏',
      shares: '分享',
    },
    author: {
      bio: '生平简介',
      achievements: '主要成就',
      quotes: '相关语录',
    },
    register: {
      title: '创建账号',
      username: '用户名',
      usernamePlaceholder: '请选择用户名',
      email: '邮箱',
      password: '密码',
      passwordHint: '至少6个字符',
      submit: '注册',
      registering: '注册中...',
      loginLink: '已有账号？',
      success: '注册成功！请登录。',
    },
    login: {
      title: '登录',
      email: '邮箱',
      password: '密码',
      submit: '登录',
      signingIn: '登录中...',
      registerLink: '没有账号？',
    },
    quotes: {
      title: '所有语录',
      filter: '筛选',
      sort: '排序',
      total: '条语录',
    },
    profile: {
      title: '个人设置',
      username: '用户名',
      bio: '个人简介',
      save: '保存更改',
      saving: '保存中...',
      success: '个人资料更新成功！',
    },
    favorites: {
      title: '我的收藏',
      empty: '暂无收藏。开始收藏一些喜欢的名言吧！',
    },
  },
}; 