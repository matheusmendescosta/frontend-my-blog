import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  title: string;
  slug: string;
  content: string;
  status: 'DRAFT' | 'PUBLISHED';
  categoryId: string;
};

type userNewPost = {
  userId: string;
};

export const useNewPost = ({ userId }: userNewPost) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const handlerSubmitTag = (data: FormProps) => {
    if (!session || !session.user) {
      return;
    }

    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/${userId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        slug: data.slug,
        content: data.content,
        status: data.status,
        categoryId: data.categoryId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push('/dashboard/posts');
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
    setValue,
    watch,
  };
};
