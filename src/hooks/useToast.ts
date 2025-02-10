/**
 * Toast 通知 hook
 * @module useToast
 */

import { toast } from 'sonner';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export function useToast() {
  return {
    toast: ({ title, description, variant = 'default' }: ToastOptions) => {
      toast[variant === 'destructive' ? 'error' : 'success'](title, {
        description,
      });
    },
    success: (title: string, description?: string) => {
      toast.success(title, { description });
    },
    error: (title: string, description?: string) => {
      toast.error(title, { description });
    },
  };
} 