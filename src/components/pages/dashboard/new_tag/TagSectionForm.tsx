"use client";

import { Button } from "@/components/ui/button";
import { useNewTag } from "./use-new-tag";

const TagSectionForm = () => {
  const { register, handleSubmit } = useNewTag();

  return (
    <div className=" px-11 pl-10 pt-6 border mt-5 rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-md font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            {...register("name")}
          />
        </div>
        <div>
          <label className="block text-md font-medium text-gray-900 dark:text-white">
            Slug
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            {...register("slug")}
          />
        </div>
        <div className="pb-4">
          <Button variant="outline" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TagSectionForm;
