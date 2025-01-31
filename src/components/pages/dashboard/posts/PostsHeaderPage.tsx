import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PostsHeaderPage = () => {
  return (
    <div className="rounded-sm border py-12 shadow-sm dark:text-white">
      <div className="mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the posts Management Page</h1>
        <p className="pb-4 text-lg">Create and manage your posts easily.</p>
        <Button asChild size="lg" variant="outline">
          {/* <Link href="/dashboard/posts/post/new">create new tag</Link> */}
        </Button>
      </div>
    </div>
  );
};

export default PostsHeaderPage;
