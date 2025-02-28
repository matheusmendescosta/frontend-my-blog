import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import usePost from '../use-post';

type FormProps = {
  authorId: string;
  title: string;
  slug: string;
  content: string;
  status: 'DRAFT' | 'PUBLISHED';
  categoryId: string;
  tags: string[];
};

const useEditMyPostEdit = ({ postId }: { postId: string }) => {
  const { data: session } = useSession();
  const { post } = usePost({ postId });
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    values: {
      title: post?.title || '',
      categoryId: post?.categoryId || '',
      content: post?.content || '',
      slug: post?.slug || '',
      status: post?.status || 'DRAFT' || 'PUBLISHED',
      tags: post?.tags?.map((tag) => tag.id) || [],
      authorId: session?.user?.id || '',
    },
  });

  const handlerSubmitPostEdit = (data: FormProps) => {
    console.log(session?.user.id);
    if (!session || !session.user) {
      return;
    }

    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/${postId}`, {
      method: 'PUT',
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
        tags: data.tags,
        authorId: session.user.id,
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
    handleSubmit: handleSubmit(handlerSubmitPostEdit),
    register,
    errors,
    isSubmitting,
    setValue,
    watch,
    post,
  };
};

export default useEditMyPostEdit;
