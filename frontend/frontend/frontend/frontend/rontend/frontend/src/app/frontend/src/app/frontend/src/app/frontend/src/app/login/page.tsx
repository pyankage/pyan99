'use client';

import { useRouter } from 'next/navigation';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🎬 Web Anichin</h1>
          <p className="text-gray-400">Masuk ke akun kamu</p>
        </div>
        <AuthForm mode="login" onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}
