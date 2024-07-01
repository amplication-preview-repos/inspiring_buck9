import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { MaterialCreateNestedManyWithoutScaffoldingsInput } from "./MaterialCreateNestedManyWithoutScaffoldingsInput";
import { OrderCreateNestedManyWithoutScaffoldingsInput } from "./OrderCreateNestedManyWithoutScaffoldingsInput";

export type ScaffoldingCreateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  materials?: MaterialCreateNestedManyWithoutScaffoldingsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutScaffoldingsInput;
  startDate?: Date | null;
};
