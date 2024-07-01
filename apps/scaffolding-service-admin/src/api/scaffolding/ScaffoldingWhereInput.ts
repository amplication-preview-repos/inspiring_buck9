import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MaterialListRelationFilter } from "../material/MaterialListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ScaffoldingWhereInput = {
  client?: ClientWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  materials?: MaterialListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  startDate?: DateTimeNullableFilter;
};
