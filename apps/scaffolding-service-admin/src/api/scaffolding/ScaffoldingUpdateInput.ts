import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { MaterialUpdateManyWithoutScaffoldingsInput } from "./MaterialUpdateManyWithoutScaffoldingsInput";
import { OrderUpdateManyWithoutScaffoldingsInput } from "./OrderUpdateManyWithoutScaffoldingsInput";

export type ScaffoldingUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  materials?: MaterialUpdateManyWithoutScaffoldingsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutScaffoldingsInput;
  startDate?: Date | null;
};
