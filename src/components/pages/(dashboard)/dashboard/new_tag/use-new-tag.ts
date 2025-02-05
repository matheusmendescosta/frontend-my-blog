import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  name: string;
  slug: string;
};

export const useNewTag = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const handlerSubmitTag = (data: FormProps) => {
    if (!session || !session.user) {
      return;
    }

    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tag`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        slug: data.slug,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push('/dashboard/tags');
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
