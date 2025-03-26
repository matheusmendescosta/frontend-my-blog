import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormProps>();

  const submitSignIn = async (data: FormProps) => {
    if (!captchaToken) {
      setError('root', { message: 'Please complete the captcha verification' });
      return;
    }

    setIsSubmitting(true);

    await signOut({ redirect: false });

    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      captchaToken,
      redirect: false,
    });

    if (response?.ok) {
      router.push('/dashboard');
    } else {
      setError('root', { message: 'Invalid credentials' });
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    register,
    handleSubmit: handleSubmit(submitSignIn),
    errors,
    setCaptchaToken,
  };
};
