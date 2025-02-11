import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/config/translations';

export function RegisterForm() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t.register.email}
        </label>
        <input
          type="email"
          className="w-full rounded-md border p-2"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t.register.password}
        </label>
        <input
          type="password"
          className="w-full rounded-md border p-2"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t.register.confirmPassword}
        </label>
        <input
          type="password"
          className="w-full rounded-md border p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-4 py-2 text-white"
      >
        {t.register.submit}
      </button>
    </form>
  );
} 