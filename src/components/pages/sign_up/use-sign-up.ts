import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export const useSignUp = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const handlerSubmitTag = (data: FormProps) => {
    setIsSubmitting(true);

    fetch('http://localhost:3333/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        role: 'READER',
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push('/sign_in');
        } else {
          setIsSubmitting(false);
        }
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    isSubmitting,
    register,
    handleSubmit: handleSubmit(handlerSubmitTag),
    errors,
  };
};
