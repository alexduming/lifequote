import axios from 'axios';

export const api = {
  // 获取语录列表
  async getQuotes(params) {
    return axios.get('/api/quotes', { params });
  },

  // 获取作者列表
  async getAuthors(params) {
    return axios.get('/api/authors', { params });
  },

  // 获取分类列表
  async getCategories() {
    return axios.get('/api/categories');
  },

  // 获取随机语录
  async getRandomQuote() {
    return axios.get('/api/quotes/random');
  }
}; 