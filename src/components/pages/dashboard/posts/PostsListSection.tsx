'use client';

import { Badge } from '@/components/ui/badge';
import { BookHeart, MessageSquareCode } from 'lucide-react';
import { useFormatter } from 'next-intl';
import Link from 'next/link';

type PostsListSectionProps = {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  author: string;
  category: string;
  tags: string[];
};

function ArrowIcon() {
  return (
    <svg width="20" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955
        L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const PostsListSection = ({ id, title, slug, content, createdAt, likes, comments, author, category, tags }: PostsListSectionProps) => {
  const formatter = useFormatter();
  const formattedDateCreateAt = createdAt
    ? formatter.dateTime(new Date(createdAt), {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    : '';

  return (
    <Link key={id} href={`posts/${id}`}>
      <div className="mb-4 rounded p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold hover:underline dark:text-gray-300">{title}</h1>
          <ArrowIcon />
        </div>
        <p className="pb-1 text-sm dark:text-gray-300">{slug}</p>
        <Badge className="border-black dark:border-white" variant="secondary">
          {category}
        </Badge>
        <div className="my-4 line-clamp-3 indent-2 dark:text-gray-300">
          {content.trim() != '' && (
            <div
              className="mb-4 rounded-sm border border-b-black p-2 dark:border-b-gray-500"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <Badge className="border-black dark:border-white" key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="mb-2 flex justify-start py-2 text-sm dark:text-gray-200">Create at: {formattedDateCreateAt}</p>
        <p className="mb-2 flex justify-start text-sm dark:text-gray-200">By: {author}</p>
        <div className="flex justify-start space-x-2 pt-2">
          <div className="flex space-x-2 text-sm dark:text-gray-200">
            <BookHeart /> <span>{likes}</span>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-200">
            <MessageSquareCode /> <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostsListSection;
