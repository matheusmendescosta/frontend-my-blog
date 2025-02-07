'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  role: string;
};

export const useUpdatePermissionUser = ({ userId }: { userId: string }) => {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>();

  const submitHandler = (data: FormProps) => {
    if (!session || !session.user) {
      return;
    }

    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/update/${userId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: data.role,
      }),
    })
      .then((response) => {
        response.json;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit(submitHandler),
    isSubmitting,
    errors,
    setValue,
  };
};
