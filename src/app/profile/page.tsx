'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';

export default function ProfilePage() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { user, supabase } = useAuth();
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('username, bio')
          .eq('user_id', user?.id)
          .single();

        if (error) throw error;

        if (data) {
          setUsername(data.username || '');
          setBio(data.bio || '');
        }
      } catch (err: any) {
        console.error('Error loading profile:', err.message);
      }
    }

    if (user) {
      loadProfile();
    }
  }, [user, supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const { error: upsertError } = await supabase
        .from('user_profiles')
        .upsert({
          user_id: user?.id,
          username,
          bio,
          updated_at: new Date().toISOString(),
        });

      if (upsertError) throw upsertError;

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 pt-16">
        <div className="container max-w-2xl mx-auto py-20 px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-3xl font-[oswald] font-bold text-white mb-8">
              {t.profile.title}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-sm">
                  {t.profile.success}
                </div>
              )}

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/60 mb-2">
                  {t.profile.username}
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-white/60 mb-2">
                  {t.profile.bio}
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-500 text-white rounded-lg px-4 py-3 font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? t.profile.saving : t.profile.save}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
} 