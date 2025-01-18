import { ArrowUp } from "lucide-react";

const DashboardInformationSection = () => {
  return (
    <div className="pt-4 border rounded-sm shadow-sm mt-4 p-4">
      <div className="p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold mb-2">Metrics about your posts</h2>
          <p className="text-gray-700">
            see the reach of your posts such as likes, comments and views
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg shadow-md h-32 flex justify-between items-center">
            <p className="text-lg font-semibold pl-4">Posts</p>
            <div className="flex items-center">
              <ArrowUp />
              <p className="pr-3 text-5xl">5</p>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-md h-32 flex justify-between items-center">
            <p className="text-lg font-semibold pl-4">Likes</p>
            <div className="flex items-center">
              <ArrowUp />
              <p className="pr-3 text-5xl">53</p>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-md h-32 flex justify-between items-center">
            <p className="text-lg font-semibold pl-4">Comments</p>
            <div className="flex items-center">
              <ArrowUp />
              <p className="pr-3 text-5xl">58</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInformationSection;
