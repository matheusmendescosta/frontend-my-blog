import { ArrowUp } from 'lucide-react';

const DashboardInformationSection = () => {
  return (
    <div className="mt-4 rounded-sm border p-4 pt-4 shadow-sm">
      <div className="rounded-lg p-6 shadow-md">
        <div>
          <h2 className="mb-2 text-xl font-bold">Metrics about your posts</h2>
          <p className="text-gray-700">see the reach of your posts such as likes, comments and views</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="flex h-32 items-center justify-between rounded-lg border p-4 shadow-md">
            <p className="pl-4 text-lg font-semibold">Posts</p>
            <div className="flex items-center">
              <ArrowUp />
              <p className="pr-3 text-5xl">5</p>
            </div>
          </div>
          <div className="flex h-32 items-center justify-between rounded-lg border p-4 shadow-md">
            <p className="pl-4 text-lg font-semibold">Likes</p>
            <div className="flex items-center">
              <ArrowUp />
              <p className="pr-3 text-5xl">53</p>
            </div>
          </div>
          <div className="flex h-32 items-center justify-between rounded-lg border p-4 shadow-md">
            <p className="pl-4 text-lg font-semibold">Comments</p>
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
