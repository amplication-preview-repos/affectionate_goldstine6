import { ViewWhereInput } from "./ViewWhereInput";
import { ViewOrderByInput } from "./ViewOrderByInput";

export type ViewFindManyArgs = {
  where?: ViewWhereInput;
  orderBy?: Array<ViewOrderByInput>;
  skip?: number;
  take?: number;
};
