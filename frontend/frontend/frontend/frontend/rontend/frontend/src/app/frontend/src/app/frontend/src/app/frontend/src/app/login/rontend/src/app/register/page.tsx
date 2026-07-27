'use client';

import { useRouter } from 'next/navigation';
import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🎬 Web Anichin</h1>
          <p className="text-gray-400">Daftar akun baru</p>
        </div>
        <AuthForm mode="register" onSuccess={handleRegisterSuccess} />
      </div>
    </div>
  );
}
