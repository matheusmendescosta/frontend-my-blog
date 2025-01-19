import { Badge } from "@/components/ui/badge";

const NewPostHeader = () => {
  return (
    <div className="border rounded-sm p-4 shadow-sm">
      <h1 className="text-3xl">Teach something</h1>
      <h3 className="text-1xl pt-2">Share your knowledge</h3>
      <div className="pt-1">
        <Badge variant="outline">Draft</Badge>
      </div>
    </div>
  );
};

export default NewPostHeader;
