export type postsDto = {
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
  }[];
};
