'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeContext } from '@/providers/ThemeProvider';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { twJoin } from 'tailwind-merge';
import { useTags } from '../tags/use-tags';
import { useCategories } from './use-categories';
import { useNewPost } from './use-new-post';
const Editor = dynamic(() => import('@tinymce/tinymce-react').then((mod) => mod.Editor), { ssr: false });

type NewPostSectionProps = {
  userId: string;
};

const NewPostSection = ({ userId }: NewPostSectionProps) => {
  const useTheme = useContext(ThemeContext);
  const { categories } = useCategories();
  const { tags } = useTags();
  const { setValue, register, handleSubmit, watch } = useNewPost({ userId });

  return (
    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex w-full flex-col">
          <label className="">Title</label>
          <input type="text" className={twJoin(`w-full rounded-md border-2 p-1.5 sm:text-sm dark:bg-gray-600`)} {...register('title')} />
        </div>
        <div className="flex w-full flex-col">
          <label className="">Slug</label>
          <input type="text" className={twJoin(`w-full rounded-md border-2 p-1.5 sm:text-sm dark:bg-gray-600`)} {...register('slug')} />
        </div>
      </div>

      <div className="flex space-x-2 sm:w-1/3 md:w-9/12 lg:w-full">
        <Select onValueChange={(value) => setValue('categoryId', value)}>
          <SelectTrigger className="w-4/5">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.category.map((category, index) => (
              <SelectItem key={index} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-1/5">
            <Button variant="outline">Tags</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select tags</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {tags?.tags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag.id}
                checked={(watch('tags') || []).includes(tag.id)}
                onCheckedChange={(checked) => {
                  const currentTags = watch('tags') || [];
                  setValue('tags', checked ? [...currentTags, tag.id] : currentTags.filter((t) => t !== tag.id));
                }}
              >
                {tag.name}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col sm:w-1/3 md:w-full lg:w-full">
        <label className="">Status</label>
        <Select onValueChange={(value) => setValue('status', value as 'DRAFT' | 'PUBLISHED')}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DRAFT">Draft</SelectItem>
            <SelectItem value="PUBLISHED">Publish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
        plugins={[
          'anchor',
          'autolink',
          'charmap',
          'codesample',
          'emoticons',
          'image',
          'link',
          'lists',
          'media',
          'searchreplace',
          'table',
          'visualblocks',
          'wordcount',
        ]}
        value={watch('content')}
        onEditorChange={(content) => setValue('content', content)}
        init={{
          height: 450,
          skin: useTheme.mode === 'dark' ? 'oxide-dark' : 'oxide',
          content_css: useTheme.mode === 'dark' ? 'dark' : 'oxide',
          width: 'auto',
          menubar: true,
          toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent' +
            '|link image | media | code | help',
        }}
      />
      <div>
        <Button variant="secondary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default NewPostSection;
