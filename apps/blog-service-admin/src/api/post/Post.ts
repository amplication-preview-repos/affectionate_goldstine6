export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  publishedDate: Date | null;
  content: string | null;
  author: string | null;
};
