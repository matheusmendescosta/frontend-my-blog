type UserPageProps = {
  userId: string;
};

const UserPage = ({ userId }: UserPageProps) => {
  return <div>UserPage: {userId}</div>;
};

export default UserPage;
