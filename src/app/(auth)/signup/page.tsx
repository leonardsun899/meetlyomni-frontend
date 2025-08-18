'use client';

import { CompanyNameStep } from '@/features/auth/components/CompanyNameStep';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function SignupPage() {
  const router = useRouter();

  const nextStep = useCallback(
    (_companyName: string) => {
      router.push('/signup/email');
    },
    [router],
  );

  return <CompanyNameStep onNext={nextStep} />;
}
