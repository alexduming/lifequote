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
  | 'education'
  | 'motivation';

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
    create: string;
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
    motivation: string;
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
    empty: string;
    loading: string;
    error: string;
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
    emailNotVerified: string;
    success: string;
    error: string;
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
    createCollection: string;
    loading: string;
    noQuotes: string;
    loadError: string;
    loadQuotesError: string;
    createSuccess: string;
    createError: string;
    updateSuccess: string;
    updateError: string;
    deleteSuccess: string;
    deleteError: string;
    editButton: string;
    deleteButton: string;
    createModal: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      descriptionLabel: string;
      descriptionPlaceholder: string;
      publicLabel: string;
      createButton: string;
    };
    editModal: {
      title: string;
      saveButton: string;
    };
  };
  collections: {
    title: string;
    create: string;
    edit: string;
    name: string;
    namePlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    makePublic: string;
    empty: string;
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
  admin: {
    quotes: {
      title: string;
      empty: string;
      loading: string;
      error: string;
      approve: string;
      reject: string;
      submitter: string;
    };
  };
  verifyEmail: {
    title: string;
    description: string;
    note: string;
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
      noData: 'No Data',
      create: 'Create'
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
      education: 'Education',
      motivation: 'Motivation',
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
      title: 'WORDS THAT INSPIRED HUMANITY FOR 1000 YEARS',
      subtitle: "Discover timeless wisdom from history's greatest minds. \nFind inspiration, motivation, and guidance.",
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
      source: 'Source',
      empty: 'No quotes yet',
      loading: 'Loading...',
      error: 'Failed to load'
    },
    sections: {
      featured: {
        title: 'Featured Quotes',
        subtitle: 'Discover wisdom from great minds',
        viewMore: 'View More'
      },
      explore: {
        title: 'Explore Topics',
        subtitle: 'Discover wisdom in different fields'
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
      emailNotVerified: 'Please verify your email address first',
      success: 'Login successful',
      error: 'Login failed, please try again'
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
      createCollection: 'New Collection',
      loading: 'Loading...',
      noQuotes: 'No quotes yet',
      loadError: 'Failed to load collections',
      loadQuotesError: 'Failed to load quotes',
      createSuccess: 'Collection created successfully',
      createError: 'Failed to create collection',
      updateSuccess: 'Collection updated successfully',
      updateError: 'Failed to update collection',
      deleteSuccess: 'Collection deleted successfully',
      deleteError: 'Failed to delete collection',
      editButton: 'Edit',
      deleteButton: 'Delete',
      createModal: {
        title: 'Create Collection',
        nameLabel: 'Name',
        namePlaceholder: 'Enter collection name',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Enter collection description',
        publicLabel: 'Public',
        createButton: 'Create'
      },
      editModal: {
        title: 'Edit Collection',
        saveButton: 'Save'
      }
    },
    collections: {
      title: 'My Collections',
      create: 'Create Collection',
      edit: 'Edit Collection',
      name: 'Collection Name',
      namePlaceholder: 'Enter collection name',
      description: 'Description',
      descriptionPlaceholder: 'Enter collection description',
      makePublic: 'Make Public',
      empty: 'No collections yet',
      errors: {
        nameRequired: 'Please enter a collection name'
      }
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
    admin: {
      quotes: {
        title: 'Pending Quotes',
        empty: 'No pending quotes',
        loading: 'Loading...',
        error: 'Failed to load',
        approve: 'Approve',
        reject: 'Reject',
        submitter: 'Submitted by'
      }
    },
    verifyEmail: {
      title: 'Verify Your Email',
      description: 'We\'ve sent a verification email to {email}. Please check your inbox and click the verification link to activate your account.',
      note: 'If you don\'t see the email, please check your spam folder. The verification email may take a few minutes to arrive.'
    }
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
      noData: '暂无数据',
      create: '创建'
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
      education: '教育',
      motivation: '励志',
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
      title: '在过去的1000年中\n那些鼓励着全人类的句子',
      subtitle: '探索人类历史上最具影响力的思想精华\n让智慧之光照亮你的人生之路',
      searchPlaceholder: '搜索名言、作者或主题...',
    },
    quotes: {
      title: '全部语录',
      filter: '筛选',
      sort: '排序',
      total: '%d 条语录',
      viewAll: '查看全部',
      noResults: '未找到相关语录',
      searchPlaceholder: '搜索语录...',
      category: '分类',
      author: '作者',
      source: '来源',
      empty: '暂无语录',
      loading: '加载中...',
      error: '加载失败'
    },
    sections: {
      featured: {
        title: '精选语录',
        subtitle: '发现智者的箴言',
        viewMore: '查看更多'
      },
      explore: {
        title: '探索主题',
        subtitle: '探索不同领域的智慧'
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
      emailNotVerified: '请先验证你的邮箱地址',
      success: '登录成功',
      error: '登录失败，请重试'
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
      createCollection: '新建收藏夹',
      loading: '加载中...',
      noQuotes: '暂无收藏的语录',
      loadError: '加载收藏夹失败',
      loadQuotesError: '加载语录失败',
      createSuccess: '收藏夹创建成功',
      createError: '创建收藏夹失败',
      updateSuccess: '收藏夹更新成功',
      updateError: '更新收藏夹失败',
      deleteSuccess: '收藏夹删除成功',
      deleteError: '删除收藏夹失败',
      editButton: '编辑',
      deleteButton: '删除',
      createModal: {
        title: '新建收藏夹',
        nameLabel: '名称',
        namePlaceholder: '输入收藏夹名称',
        descriptionLabel: '描述',
        descriptionPlaceholder: '输入收藏夹描述',
        publicLabel: '公开',
        createButton: '创建'
      },
      editModal: {
        title: '编辑收藏夹',
        saveButton: '保存'
      }
    },
    collections: {
      title: '我的收藏夹',
      create: '创建收藏夹',
      edit: '编辑收藏夹',
      name: '收藏夹名称',
      namePlaceholder: '请输入收藏夹名称',
      description: '描述',
      descriptionPlaceholder: '添加描述（可选）',
      makePublic: '设为公开收藏夹',
      empty: '暂无收藏夹',
      errors: {
        nameRequired: '请输入收藏夹名称'
      }
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
    admin: {
      quotes: {
        title: '待审核语录',
        empty: '暂无待审核语录',
        loading: '加载中...',
        error: '加载失败',
        approve: '通过',
        reject: '拒绝',
        submitter: '提交者'
      }
    },
    verifyEmail: {
      title: '验证你的邮箱',
      description: '我们已经发送了一封验证邮件到 {email}。请检查你的收件箱并点击验证链接来激活你的账户。',
      note: '如果你没有收到邮件，请检查垃圾邮件文件夹。验证邮件可能需要几分钟时间才能送达。'
    }
  },
};

// 添加翻译键的类型定义
export type TranslationKeys = typeof translations.en; 