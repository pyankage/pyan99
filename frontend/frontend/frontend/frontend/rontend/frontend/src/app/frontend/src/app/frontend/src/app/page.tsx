'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { user, token } = useAuthStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎬 Web Anichin</h1>
          <div className="flex gap-4">
            {token && user ? (
              <>
                <span className="text-gray-300">Welcome, {user.username}</span>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                  Login
                </Link>
                <Link href="/register" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Selamat Datang di Web Anichin</h2>
        <p className="text-gray-400 mb-8">Platform streaming donghua terbaik dengan subtitle Indonesia</p>
        
        {!token ? (
          <div className="flex gap-4 justify-center">
            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded text-lg font-bold">
              Mulai Sekarang
            </Link>
            <Link href="/login" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded text-lg font-bold">
              Login
            </Link>
          </div>
        ) : (
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-xl mb-4">Halo {user?.username}! 👋</p>
            <p className="text-gray-400">Fitur lengkap segera hadir. Stay tuned! 🚀</p>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Fitur Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">📚 Katalog Lengkap</h4>
              <p className="text-gray-300">Ribuan donghua dengan berbagai genre</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">🎯 Subtitle Indonesia</h4>
              <p className="text-gray-300">Semua episode dengan subtitle bahasa Indonesia</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">⭐ Watchlist</h4>
              <p className="text-gray-300">Simpan donghua favorit kamu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2024 Web Anichin. All rights reserved.</p>
      </footer>
    </div>
  );
}
