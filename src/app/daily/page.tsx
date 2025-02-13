import DailyQuotes from '@/components/DailyQuotes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Daily Quotes - LifeQuote',
  description: '每日精选语录，激励你的生活',
};

export default function DailyPage() {
  return (
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main>
        <DailyQuotes />
      </main>
      <Footer />
    </div>
  );
} 