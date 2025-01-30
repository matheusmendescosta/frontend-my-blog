export type categories = {
  id: string;
  name: string;
  slug: string;
};

export type categoriesDto = {
  hasMore: boolean;
  offset: number;
  limit: number;
  totalCount: number;
  category: categories[];
};
