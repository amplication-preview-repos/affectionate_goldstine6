import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ViewWhereInput = {
  id?: StringFilter;
  postId?: StringNullableFilter;
  viewerIp?: StringNullableFilter;
  viewDate?: DateTimeNullableFilter;
};
