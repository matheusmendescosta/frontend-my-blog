import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const DashboardHeaderSection = () => {
  return (
    <div className="border rounded-sm p-6 shadow-md w-auto">
      <h1 className="py-2 text-4xl font-bold">
        Welcome to my brain administrator
      </h1>
      <div className="pt-6">
        <div>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Open your mind!</AlertTitle>
            <AlertDescription>
              Tracks post metrics such as likes, comments and views
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex pt-4 space-x-2">
          <Button variant="outline">Create post</Button>
          <Button variant="outline">Create category</Button>
          <Button variant="outline">Create tag</Button>
          <div className="flex space-x-2 justify-end w-full">
            <Button variant="outline">see my posts</Button>
            <Button variant="outline">see my comments</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderSection;
