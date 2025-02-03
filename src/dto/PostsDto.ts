export type postsDto = {
  hasMore: boolean;
  limit: number;
  offset: number;
  totalCount: number;
  posts: {
    id: string;
    title: string;
    slug: string;
    content: string;
    status: 'DRAFT' | 'PUBLISHED';
    createdAt: string;
    updatedAt: string;
    authorId: string;
    categoryId: string;
    _count: {
      likes: number;
    };
    comments: [];
    author: {
      name: string;
    };
    category: {
      name: string;
    };
    tags: {
      name: string;
      slug: string;
    }[];
  }[];
};
