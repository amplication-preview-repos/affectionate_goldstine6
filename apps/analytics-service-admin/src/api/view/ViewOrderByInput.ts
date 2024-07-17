import { SortOrder } from "../../util/SortOrder";

export type ViewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  postId?: SortOrder;
  viewerIp?: SortOrder;
  viewDate?: SortOrder;
};
