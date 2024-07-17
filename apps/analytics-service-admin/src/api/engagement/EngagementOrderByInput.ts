import { SortOrder } from "../../util/SortOrder";

export type EngagementOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  postId?: SortOrder;
  shares?: SortOrder;
  likes?: SortOrder;
  comments?: SortOrder;
  engagementDate?: SortOrder;
};
