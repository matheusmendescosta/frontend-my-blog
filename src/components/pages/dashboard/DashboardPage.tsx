"use client";

import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();

  console.log(session);

  const user = session?.user;

  return (
    <div>
      <p>ola {user?.name}</p>
      <a href={`/dashboard/user/${user?.id}`}>perfil</a>
    </div>
  );
};

export default DashboardPage;
