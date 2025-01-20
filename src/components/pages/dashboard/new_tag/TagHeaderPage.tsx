import { Button } from "@/components/ui/button";
import Link from "next/link";

const TagHeaderPage = () => {
  return (
    <div className="border rounded-sm shadow-sm text-white py-12">
      <div className="mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Tag Management Page
        </h1>
        <p className="text-lg pb-4">Create and manage your tags easily.</p>
        <Button asChild size="lg" variant="outline">
          <Link href="/dashboard/tags">see all tags</Link>
        </Button>
      </div>
    </div>
  );
};

export default TagHeaderPage;
