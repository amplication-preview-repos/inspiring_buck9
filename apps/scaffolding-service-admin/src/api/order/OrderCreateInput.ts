import { MaterialWhereUniqueInput } from "../material/MaterialWhereUniqueInput";
import { ScaffoldingWhereUniqueInput } from "../scaffolding/ScaffoldingWhereUniqueInput";

export type OrderCreateInput = {
  material?: MaterialWhereUniqueInput | null;
  orderDate?: Date | null;
  project?: ScaffoldingWhereUniqueInput | null;
  quantity?: number | null;
};
