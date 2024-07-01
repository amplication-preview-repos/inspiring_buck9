import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ScaffoldingWhereUniqueInput } from "../scaffolding/ScaffoldingWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MaterialWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  project?: ScaffoldingWhereUniqueInput;
  quantity?: IntNullableFilter;
};
