export type View = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string | null;
  viewerIp: string | null;
  viewDate: Date | null;
};
