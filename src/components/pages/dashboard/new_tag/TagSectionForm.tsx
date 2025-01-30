'use client';

import { Button } from '@/components/ui/button';
import { useNewTag } from './use-new-tag';

const TagSectionForm = () => {
  const { register, handleSubmit } = useNewTag();

  return (
    <div className="mt-5 rounded-sm border px-11 pl-10 pt-6 w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="text-md block font-medium text-gray-900 dark:text-white">Name</label>
          <input
            type="text"
            className="block w-full rounded-lg border p-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            {...register('name')}
          />
        </div>
        <div>
          <label className="text-md block font-medium text-gray-900 dark:text-white">Slug</label>
          <input
            type="text"
            className="block w-full rounded-lg border p-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            {...register('slug')}
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
