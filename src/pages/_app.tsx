import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </AuthProvider>
    </LanguageProvider>
  );
} 