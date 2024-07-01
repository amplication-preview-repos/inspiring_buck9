import { OrderCreateNestedManyWithoutMaterialsInput } from "./OrderCreateNestedManyWithoutMaterialsInput";
import { ScaffoldingWhereUniqueInput } from "../scaffolding/ScaffoldingWhereUniqueInput";

export type MaterialCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutMaterialsInput;
  project?: ScaffoldingWhereUniqueInput | null;
  quantity?: number | null;
};
