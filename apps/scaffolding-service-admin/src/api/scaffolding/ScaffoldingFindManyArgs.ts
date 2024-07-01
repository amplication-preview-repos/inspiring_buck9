import { ScaffoldingWhereInput } from "./ScaffoldingWhereInput";
import { ScaffoldingOrderByInput } from "./ScaffoldingOrderByInput";

export type ScaffoldingFindManyArgs = {
  where?: ScaffoldingWhereInput;
  orderBy?: Array<ScaffoldingOrderByInput>;
  skip?: number;
  take?: number;
};
