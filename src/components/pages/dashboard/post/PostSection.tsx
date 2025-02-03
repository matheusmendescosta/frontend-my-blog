'use client';

import { Badge } from '@/components/ui/badge';
import { ThemeContext } from '@/providers/ThemeProvider';
import { BookHeart } from 'lucide-react';
import { useContext, useEffect, useRef } from 'react';
import { twJoin } from 'tailwind-merge';
import usePost from './use-post';

type PostSection = {
  postId: string;
};

const PostSection = ({ postId }: PostSection) => {
  const { post } = usePost({ postId });
  const theme = useContext(ThemeContext);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (post?.content && iframeRef.current) {
      const document = iframeRef.current.contentDocument;
      if (document) {
        const isDark = theme.mode === 'dark';

        const bgColor = isDark ? '#1a202c' : '#ffffff';
        const textColor = isDark ? '#ffffff' : '#000000';
        const linkColor = isDark ? '#90cdf4' : '#1a73e8';
        document.open();
        document.write(`
            <html>
              <head>
                <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 10px;
                  background: ${bgColor};
                  color: ${textColor};
                  height: auto;
                }
                pre {
                  background: ${isDark ? '#2d3748' : '#f3f4f6'};
                  color: ${isDark ? '#e2e8f0' : '#1f2937'};
                  padding: 10px;
                  border-radius: 5px;
                  overflow-x: auto;
                }
                a {
                  color: ${linkColor};
                  text-decoration: underline;
                }
              </style>
              </head>
              <body>
                ${post.content}
              </body>
            </html>
          `);
        document.close();

        const adjustIframeHeight = () => {
          if (iframeRef.current && iframeRef.current.contentWindow) {
            const body = iframeRef.current.contentDocument?.body;
            const height = body ? body.scrollHeight : 0;
            iframeRef.current.style.height = `${height}px`;
          }
        };

        iframeRef.current.onload = adjustIframeHeight;
        adjustIframeHeight();
      }
    }
  }, [post?.content, theme]);

  return (
    <section>
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <h1 className="font-semibold italic">{post?.slug}</h1>
      <Badge>{post?.category.name}</Badge>

      <div className="my-2 rounded-lg border p-2">
        <iframe ref={iframeRef} className="w-full rounded-md border" sandbox="allow-scripts allow-same-origin" />
      </div>

      <div className="flex flex-col justify-start">
        <span>create at: {post?.createdAt}</span>
        <span>update at: {post?.updatedAt}</span>
      </div>
      <div className="flex space-x-2 py-4 text-sm text-gray-500">
        <BookHeart /> <span>{post?._count.likes}</span>
      </div>
      <div className="flex space-x-2">
        {post?.tags.map((tag, index) => (
          <Badge className="border-black dark:border-white" key={index} variant="outline">
            {tag.name}
          </Badge>
        ))}
      </div>
      <div className="py-2">
        <h2>Comments</h2>
        {post?.comments && post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <div
              key={comment.id}
              className={twJoin(`my-2 flex justify-between rounded border p-2`, index % 2 === 1 ? 'flex-row-reverse' : '')}
            >
              <p>{comment.content}</p>
              <p></p>
              <span>{comment.createdAt}</span>
            </div>
          ))
        ) : (
          <p>No comments</p>
        )}
      </div>
    </section>
  );
};

export default PostSection;
