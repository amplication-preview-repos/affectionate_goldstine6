import { ViewWhereInput } from "./ViewWhereInput";

export type ViewListRelationFilter = {
  every?: ViewWhereInput;
  some?: ViewWhereInput;
  none?: ViewWhereInput;
};
