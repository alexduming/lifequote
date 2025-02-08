/**
 * 多语言翻译配置
 * @module translations
 */

export type Language = 'en' | 'zh';

export type CategoryKey = 
  | 'wisdom' 
  | 'inspiration' 
  | 'life' 
  | 'love' 
  | 'success' 
  | 'happiness' 
  | 'friendship' 
  | 'family'
  | 'literature'
  | 'art'
  | 'philosophy'
  | 'science'
  | 'history'
  | 'politics'
  | 'economics'
  | 'education';

export type TranslationType = {
  common: {
    appName: string;
    loading: string;
    error: string;
    success: string;
    confirm: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    search: string;
    submit: string;
    noData: string;
  };
  categories: {
    wisdom: string;
    inspiration: string;
    life: string;
    love: string;
    success: string;
    happiness: string;
    friendship: string;
    family: string;
    literature: string;
    art: string;
    philosophy: string;
    science: string;
    history: string;
    politics: string;
    economics: string;
    education: string;
  };
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
    submit: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  quotes: {
    title: string;
    filter: string;
    sort: string;
    total: string;
    viewAll: string;
    noResults: string;
    searchPlaceholder: string;
    category: string;
    author: string;
    source: string;
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
    cancel: string;
    create: string;
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
    confirmPassword: string;
    passwordMismatch: string;
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
  collections: {
    create: string;
    edit: string;
    name: string;
    namePlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    makePublic: string;
    errors: {
      nameRequired: string;
    };
  };
  submit: {
    title: string;
    quoteZh: string;
    quoteEn: string;
    quoteZhPlaceholder: string;
    quoteEnPlaceholder: string;
    authorZh: string;
    authorEn: string;
    authorTitleZh: string;
    authorTitleEn: string;
    category: string;
    source: string;
    notes: string;
    submit: string;
  };
};

export const translations: Record<Language, TranslationType> = {
  en: {
    common: {
      appName: 'Life Quote',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      confirm: 'Confirm',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      search: 'Search',
      submit: 'Submit',
      noData: 'No Data'
    },
    categories: {
      wisdom: 'Wisdom',
      inspiration: 'Inspiration',
      life: 'Life',
      love: 'Love',
      success: 'Success',
      happiness: 'Happiness',
      friendship: 'Friendship',
      family: 'Family',
      literature: 'Literature',
      art: 'Art',
      philosophy: 'Philosophy',
      science: 'Science',
      history: 'History',
      politics: 'Politics',
      economics: 'Economics',
      education: 'Education'
    },
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      profile: 'Profile',
      authors: 'Authors',
      topics: 'Topics',
      daily: 'Daily',
      books: 'Books',
      quotes: 'Quotes',
      favorites: 'Favorites',
      signOut: 'Sign Out',
      submit: 'Submit Quote',
    },
    hero: {
      title: 'Discover Life\'s Wisdom\nFind Millennial Inspiration',
      subtitle: 'Explore the most influential thoughts in human history\nLet wisdom light your path of life',
      searchPlaceholder: 'Search quotes, authors, or topics...',
    },
    quotes: {
      title: 'All Quotes',
      filter: 'Filter',
      sort: 'Sort',
      total: '%d quotes',
      viewAll: 'View All',
      noResults: 'No quotes found',
      searchPlaceholder: 'Search quotes...',
      category: 'Category',
      author: 'Author',
      source: 'Source'
    },
    sections: {
      featured: {
        title: 'Today\'s Featured',
        subtitle: 'Daily curated classic quotes',
        viewMore: 'View More',
      },
      explore: {
        title: 'Explore Topics',
        subtitle: 'Discover wisdom in different fields',
      },
      stats: {
        quotes: 'quotes',
      },
      topics: {
        title: 'Popular Topics',
        description: 'Explore wisdom in different fields',
      },
    },
    actions: {
      like: 'Like',
      save: 'Save',
      share: 'Share',
      quotes: 'quotes',
      close: 'Close',
      viewDetails: 'View Details',
      searchTopics: 'Search Topics',
      cancel: 'Cancel',
      create: 'Create',
    },
    books: {
      title: 'Classic Books',
      subtitle: 'Explore the source of wisdom',
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
      resultsFor: 'Results for: %s',
      tryDifferent: 'Try different keywords',
    },
    stats: {
      quotes: 'quotes',
      collections: 'collections',
      shares: 'shares',
    },
    author: {
      bio: 'Biography',
      achievements: 'Achievements',
      quotes: 'Quotes',
    },
    register: {
      title: 'Create Account',
      username: 'Username',
      usernamePlaceholder: 'Enter your username',
      email: 'Email',
      password: 'Password',
      passwordHint: 'Password must be at least 6 characters',
      confirmPassword: 'Confirm Password',
      passwordMismatch: 'Passwords do not match',
      submit: 'Register',
      registering: 'Registering...',
      loginLink: 'Already have an account? Login',
      success: 'Registration successful! Please check your email and click the verification link to complete registration.',
    },
    login: {
      title: 'Login',
      email: 'Email',
      password: 'Password',
      submit: 'Login',
      signingIn: 'Signing in...',
      registerLink: 'Don\'t have an account?',
    },
    profile: {
      title: 'Profile',
      username: 'Username',
      bio: 'Bio',
      save: 'Save',
      saving: 'Saving...',
      success: 'Saved successfully',
    },
    favorites: {
      title: 'My Favorites',
      empty: 'No favorites yet',
    },
    collections: {
      create: 'Create Collection',
      edit: 'Edit Collection',
      name: 'Name',
      namePlaceholder: 'Enter collection name',
      description: 'Description',
      descriptionPlaceholder: 'Add description (optional)',
      makePublic: 'Make this collection public',
      errors: {
        nameRequired: 'Please enter a collection name',
      },
    },
    submit: {
      title: 'Submit New Quote',
      quoteZh: 'Chinese Quote',
      quoteEn: 'English Quote',
      quoteZhPlaceholder: 'Enter the quote in Chinese',
      quoteEnPlaceholder: 'Enter the quote in English',
      authorZh: 'Author Name (Chinese)',
      authorEn: 'Author Name (English)',
      authorTitleZh: 'Author Title (Chinese)',
      authorTitleEn: 'Author Title (English)',
      category: 'Category',
      source: 'Source',
      notes: 'Notes',
      submit: 'Submit'
    },
  },
  zh: {
    common: {
      appName: '生活语录',
      loading: '加载中...',
      error: '错误',
      success: '成功',
      confirm: '确认',
      cancel: '取消',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      search: '搜索',
      submit: '提交',
      noData: '暂无数据'
    },
    categories: {
      wisdom: '智慧',
      inspiration: '励志',
      life: '生活',
      love: '爱情',
      success: '成功',
      happiness: '幸福',
      friendship: '友情',
      family: '家庭',
      literature: '文学',
      art: '艺术',
      philosophy: '哲学',
      science: '科学',
      history: '历史',
      politics: '政治',
      economics: '经济',
      education: '教育'
    },
    nav: {
      home: '首页',
      about: '关于',
      contact: '联系我们',
      login: '登录',
      register: '注册',
      profile: '个人资料',
      authors: '作者',
      topics: '主题',
      daily: '每日一句',
      books: '书籍',
      quotes: '语录',
      favorites: '收藏',
      signOut: '退出',
      submit: '提交语录',
    },
    hero: {
      title: '发现生活的智慧\n感受千年的启迪',
      subtitle: '探索人类历史上最具影响力的思想精华\n让智慧之光照亮你的人生之路',
      searchPlaceholder: '搜索名言、作者或主题...',
    },
    quotes: {
      title: '所有语录',
      filter: '筛选',
      sort: '排序',
      total: '%d 条语录',
      viewAll: '查看全部',
      noResults: '未找到语录',
      searchPlaceholder: '搜索语录...',
      category: '分类',
      author: '作者',
      source: '来源'
    },
    sections: {
      featured: {
        title: '今日精选',
        subtitle: '每日精心挑选的经典语录',
        viewMore: '查看更多',
      },
      explore: {
        title: '探索主题',
        subtitle: '发现不同领域的智慧之光',
      },
      stats: {
        quotes: '条语录',
      },
      topics: {
        title: '热门主题',
        description: '探索不同领域的智慧',
      },
    },
    actions: {
      like: '点赞',
      save: '收藏',
      share: '分享',
      quotes: '条语录',
      close: '关闭',
      viewDetails: '查看详情',
      searchTopics: '搜索主题',
      cancel: '取消',
      create: '创建',
    },
    books: {
      title: '经典著作',
      subtitle: '探索智慧的源泉',
      stats: {
        books: '本书',
        quotes: '条语录',
      },
    },
    search: {
      placeholder: '搜索名言、作者或主题...',
      noResults: '未找到相关结果',
      results: '找到 %d 条结果',
      viewAll: '查看全部结果',
      resultsFor: '搜索结果：%s',
      tryDifferent: '尝试使用其他关键词',
    },
    stats: {
      quotes: '条语录',
      collections: '个收藏',
      shares: '次分享',
    },
    author: {
      bio: '作者简介',
      achievements: '主要成就',
      quotes: '名言语录',
    },
    register: {
      title: '创建账号',
      username: '用户名',
      usernamePlaceholder: '请输入用户名',
      email: '邮箱',
      password: '密码',
      passwordHint: '密码长度至少为6位',
      confirmPassword: '确认密码',
      passwordMismatch: '两次输入的密码不一致',
      submit: '注册',
      registering: '注册中...',
      loginLink: '已有账号？',
      success: '注册成功！请查看您的邮箱并点击验证链接以完成注册。',
    },
    login: {
      title: '登录',
      email: '邮箱',
      password: '密码',
      submit: '登录',
      signingIn: '登录中...',
      registerLink: '还没有账号？',
    },
    profile: {
      title: '个人资料',
      username: '用户名',
      bio: '个人简介',
      save: '保存',
      saving: '保存中...',
      success: '保存成功',
    },
    favorites: {
      title: '我的收藏',
      empty: '暂无收藏',
    },
    collections: {
      create: '创建收藏夹',
      edit: '编辑收藏夹',
      name: '名称',
      namePlaceholder: '输入收藏夹名称',
      description: '描述',
      descriptionPlaceholder: '添加描述（可选）',
      makePublic: '设为公开收藏夹',
      errors: {
        nameRequired: '请输入收藏夹名称',
      },
    },
    submit: {
      title: '提交新语录',
      quoteZh: '中文语录',
      quoteEn: '英文语录',
      quoteZhPlaceholder: '请输入中文语录内容',
      quoteEnPlaceholder: '请输入英文语录内容',
      authorZh: '作者中文名',
      authorEn: '作者英文名',
      authorTitleZh: '作者中文头衔',
      authorTitleEn: '作者英文头衔',
      category: '分类',
      source: '出处',
      notes: '备注',
      submit: '提交'
    },
  },
}; 