import PostSection from './PostSection';

type PostPageProps = {
  postId: string;
};

const PostPage = ({ postId }: PostPageProps) => {
  return <PostSection postId={postId} />;
};

export default PostPage;
