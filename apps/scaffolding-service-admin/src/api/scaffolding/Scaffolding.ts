import { Client } from "../client/Client";
import { Material } from "../material/Material";
import { Order } from "../order/Order";

export type Scaffolding = {
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  materials?: Array<Material>;
  name: string | null;
  orders?: Array<Order>;
  startDate: Date | null;
  updatedAt: Date;
};
