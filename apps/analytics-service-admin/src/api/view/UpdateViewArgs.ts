import { ViewWhereUniqueInput } from "./ViewWhereUniqueInput";
import { ViewUpdateInput } from "./ViewUpdateInput";

export type UpdateViewArgs = {
  where: ViewWhereUniqueInput;
  data: ViewUpdateInput;
};
