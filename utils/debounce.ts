/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间（毫秒）
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// 在注册组件中使用
const debouncedSignUp = debounce(handleSignUp, 1000); 