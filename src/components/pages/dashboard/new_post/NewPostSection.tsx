'use client';

import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/providers/ThemeProvider';
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react';
import { twJoin } from 'tailwind-merge';
const Editor = dynamic(() => import('@tinymce/tinymce-react').then((mod) => mod.Editor), { ssr: false });

const NewPostSection = () => {
  const [content, setContent] = useState('');
  const useTheme = useContext(ThemeContext);

  return (
    <form className="mt-4 space-y-4" action="">
      <div className="space-y-3 pr-3">
        <label className="block text-sm font-medium dark:text-gray-100">Title</label>
        <input type="text" className={twJoin(`mt-1 block w-full rounded-md border-2 p-1.5 sm:text-sm dark:bg-gray-600`)} />
        <label className="block text-sm font-medium dark:text-gray-100">Slug</label>
        <input type="text" className={twJoin(`mt-1 block w-full rounded-md border-2 p-1.5 sm:text-sm dark:bg-gray-600`)} />
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
        value={content}
        onEditorChange={setContent}
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
      <label htmlFor="">Draft</label>
      <input type="checkbox" />
      <Button variant="secondary" type="submit">
        Publish
      </Button>
    </form>
  );
};

export default NewPostSection;
