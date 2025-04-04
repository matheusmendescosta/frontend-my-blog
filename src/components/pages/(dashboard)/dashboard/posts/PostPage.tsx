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
import { twJoin } from 'tailwind-merge';
import PostsHeaderPage from './PostsHeaderPage';
import PostsListSection from './PostsListSection';
import { usePosts } from './use-posts';

const PostsPage = () => {
  const { posts } = usePosts();

  return (
    <>
      <PostsHeaderPage />
      {posts &&
        posts.posts.map((post, index) => (
          <div
            key={index}
            className={twJoin('my-2 rounded-sm border hover:cursor-pointer hover:shadow-sm hover:shadow-black dark:hover:shadow-white')}
          >
            <PostsListSection
              id={post.id}
              author={post.author.name}
              category={post.category.name}
              title={post.title}
              slug={post.slug}
              content={post.content}
              createdAt={post.createdAt}
              comments={post._count.comments}
              likes={post._count.likes}
              key={index}
              tags={post.tags.map((tag) => tag.name)}
            />
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

export default PostsPage;
