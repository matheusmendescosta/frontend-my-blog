import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TagsHeaderPage = () => {
  return (
    <div className="rounded-sm border py-12 dark:text-white shadow-sm">
      <div className="mx-auto px-4">
        <h1 className="mb-4 text-2xl font-bold lg:text-4xl">Welcome to the Tag Management Page</h1>
        <p className="pb-4 text-lg">Create and manage your tags easily.</p>
        <Button size="lg" variant="outline" asChild>
          <Link href="/dashboard/tags/new">create new tag</Link>
        </Button>
      </div>
    </div>
  );
};

export default TagsHeaderPage;
