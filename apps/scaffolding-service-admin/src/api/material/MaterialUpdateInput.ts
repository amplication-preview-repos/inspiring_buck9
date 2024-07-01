import { OrderUpdateManyWithoutMaterialsInput } from "./OrderUpdateManyWithoutMaterialsInput";
import { ScaffoldingWhereUniqueInput } from "../scaffolding/ScaffoldingWhereUniqueInput";

export type MaterialUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutMaterialsInput;
  project?: ScaffoldingWhereUniqueInput | null;
  quantity?: number | null;
};
