import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScaffoldingListRelationFilter } from "../scaffolding/ScaffoldingListRelationFilter";

export type ClientWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  projects?: ScaffoldingListRelationFilter;
};
