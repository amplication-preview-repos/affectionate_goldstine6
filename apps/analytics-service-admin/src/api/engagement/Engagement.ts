export type Engagement = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string | null;
  shares: number | null;
  likes: number | null;
  comments: number | null;
  engagementDate: Date | null;
};
