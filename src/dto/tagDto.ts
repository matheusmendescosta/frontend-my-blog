export type tags = {
  id: string;
  name: string;
  slug: string;
};

export type tagDto = {
  hasMore: boolean;
  offset: number;
  limit: number;
  totalCount: number;
  tags: tags[];
};
