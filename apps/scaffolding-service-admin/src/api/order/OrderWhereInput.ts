import { StringFilter } from "../../util/StringFilter";
import { MaterialWhereUniqueInput } from "../material/MaterialWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScaffoldingWhereUniqueInput } from "../scaffolding/ScaffoldingWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  material?: MaterialWhereUniqueInput;
  orderDate?: DateTimeNullableFilter;
  project?: ScaffoldingWhereUniqueInput;
  quantity?: IntNullableFilter;
};
