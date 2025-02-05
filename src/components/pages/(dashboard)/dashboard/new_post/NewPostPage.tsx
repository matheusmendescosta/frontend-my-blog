import NewPostHeader from './NewPostHeader';
import NewPostSection from './NewPostSection';

type NewPostPageProps = {
  userId: string;
};

const NewPostPage = ({ userId }: NewPostPageProps) => {
  return (
    <>
      <NewPostHeader />
      <NewPostSection userId={userId} />
    </>
  );
};

export default NewPostPage;
