'use client';

import { Badge } from '@/components/ui/badge';
import { BookHeart, MessageSquareCode } from 'lucide-react';
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

const PostsListSection = ({ id, title, slug, content, createdAt, likes, comments, author, category }: PostsListSectionProps) => {
  return (
    <Link key={id} href={`posts/post/${id}`}>
      <div className="mb-4 rounded p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-gray-600 hover:underline">{title}</h1>
          <ArrowIcon />
        </div>
        <p className="pb-1 text-sm text-gray-600">{slug}</p>
        <Badge variant="outline">{category}</Badge>
        <p className="my-4 line-clamp-3 indent-2 text-gray-700">{content}</p>
        <p className="mb-2 flex justify-start pt-2 text-sm text-gray-500">{createdAt}</p>
        <p className="mb-2 flex justify-start text-sm text-gray-500">By: {author}</p>
        <div className="flex justify-start space-x-2 pt-2">
          <div className="flex space-x-2 text-sm text-gray-500">
            <BookHeart /> <span>{likes}</span>
          </div>
          <div className="flex space-x-2 text-sm text-gray-500">
            <MessageSquareCode /> <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostsListSection;
