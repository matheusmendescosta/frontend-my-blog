'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { BookHeart, MessageSquareCode } from 'lucide-react';
import { usePosts } from './use-posts';

const PostsListSection = () => {
  const { posts } = usePosts();
  console.log(posts);
  return (
    <>
      {posts &&
        posts?.posts.map((post, index) => (
          <div key={index} className="mb-4 rounded p-4 shadow-sm">
            <a href={`posts/post/${post.id}`} className="text-2xl font-bold text-gray-600 hover:underline">
              {post.title}
            </a>
            <p className="text-sm text-gray-600">{post.slug}</p>
            <p className="my-4 line-clamp-3 indent-2 text-gray-700">{post.content}</p>
            <p className="mb-2 flex justify-start pt-2 text-sm text-gray-500">{post.createdAt}</p>
            <div className="flex justify-start space-x-2 pt-2">
              <div className="flex space-x-2 text-sm text-gray-500">
                <BookHeart /> <span>{post._count.likes}</span>
              </div>
              <div className="flex space-x-2 text-sm text-gray-500">
                <MessageSquareCode /> <span>{post.comments.length}</span>
              </div>
            </div>
          </div>
        ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PostsListSection;
