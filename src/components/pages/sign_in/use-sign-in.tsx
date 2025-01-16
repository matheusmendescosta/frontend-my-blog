import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormProps = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  const submitSignIn = async (data: FormProps) => {
    setIsSubmitting(true);

    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((response) => {
      if (response?.ok) {
        router.push("/dashboard");
      } else {
        setIsSubmitting(false);
      }
    });
  };

  return {
    isSubmitting,
    register,
    handleSubmit: handleSubmit(submitSignIn),
    errors,
  };
};
