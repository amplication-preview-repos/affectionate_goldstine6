import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EngagementWhereInput = {
  id?: StringFilter;
  postId?: StringNullableFilter;
  shares?: IntNullableFilter;
  likes?: IntNullableFilter;
  comments?: IntNullableFilter;
  engagementDate?: DateTimeNullableFilter;
};
