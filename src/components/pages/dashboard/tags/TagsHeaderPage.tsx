import { Button } from "@/components/ui/button";
import Link from "next/link";

const TagsHeaderPage = () => {
  return (
    <div className="border rounded-sm shadow-sm text-white py-12">
      <div className="mx-auto px-4">
        <h1 className="lg:text-4xl text-2xl font-bold mb-4">
          Welcome to the Tag Management Page
        </h1>
        <p className="text-lg pb-4">Create and manage your tags easily.</p>
        <Button size="lg" variant="outline" asChild>
          <Link href="/dashboard/tags/new">create new tag</Link>
        </Button>
      </div>
    </div>
  );
};

export default TagsHeaderPage;
