import { Order } from "../order/Order";
import { Scaffolding } from "../scaffolding/Scaffolding";

export type Material = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  project?: Scaffolding | null;
  quantity: number | null;
  updatedAt: Date;
};
