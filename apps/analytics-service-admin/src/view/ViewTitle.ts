import { View as TView } from "../api/view/View";

export const VIEW_TITLE_FIELD = "postId";

export const ViewTitle = (record: TView): string => {
  return record.postId?.toString() || String(record.id);
};
