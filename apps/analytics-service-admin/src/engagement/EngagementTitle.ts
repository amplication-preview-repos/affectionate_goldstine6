import { Engagement as TEngagement } from "../api/engagement/Engagement";

export const ENGAGEMENT_TITLE_FIELD = "postId";

export const EngagementTitle = (record: TEngagement): string => {
  return record.postId?.toString() || String(record.id);
};
