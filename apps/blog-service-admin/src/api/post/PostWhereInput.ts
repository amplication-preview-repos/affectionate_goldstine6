import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
};
