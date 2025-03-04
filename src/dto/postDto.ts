export type postDto = {
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
  comments: {
    id: string;
    content: string;
    createdAt: string;
  }[];
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
};
