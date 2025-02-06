import { CategoryKey } from './translations';

/**
 * @description 所有可用的语录类别
 */
export const CATEGORIES: CategoryKey[] = [
  'wisdom',
  'inspiration',
  'life',
  'love',
  'success',
  'happiness',
  'friendship',
  'family',
  'literature',
  'art',
  'philosophy',
  'science',
  'history',
  'politics',
  'economics',
  'education'
];

/**
 * @description 快速访问的热门类别
 */
export const QUICK_CATEGORIES: CategoryKey[] = [
  'inspiration',
  'life',
  'love',
  'success',
  'wisdom'
];

/**
 * @description 检查一个值是否为有效的类别
 * @param value - 要检查的值
 * @returns 是否为有效类别
 */
export function isCategoryKey(value: string): value is CategoryKey {
  return CATEGORIES.includes(value as CategoryKey);
} 