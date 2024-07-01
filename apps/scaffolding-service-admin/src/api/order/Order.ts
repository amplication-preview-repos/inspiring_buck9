import { Material } from "../material/Material";
import { Scaffolding } from "../scaffolding/Scaffolding";

export type Order = {
  createdAt: Date;
  id: string;
  material?: Material | null;
  orderDate: Date | null;
  project?: Scaffolding | null;
  quantity: number | null;
  updatedAt: Date;
};
