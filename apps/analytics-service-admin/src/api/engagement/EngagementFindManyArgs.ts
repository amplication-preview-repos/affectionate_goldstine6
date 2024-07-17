import { EngagementWhereInput } from "./EngagementWhereInput";
import { EngagementOrderByInput } from "./EngagementOrderByInput";

export type EngagementFindManyArgs = {
  where?: EngagementWhereInput;
  orderBy?: Array<EngagementOrderByInput>;
  skip?: number;
  take?: number;
};
