import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TagsHeaderPage = () => {
  return (
    <div className="rounded-sm border py-12 shadow-sm dark:text-white">
      <div className="mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the Tag Management Page</h1>
        <p className="pb-4 text-lg">Create and manage your tags easily.</p>
        <Button asChild size="lg" variant="outline">
          <Link href="/dashboard/tags/new">create new tag</Link>
        </Button>
      </div>
    </div>
  );
};

export default TagsHeaderPage;
