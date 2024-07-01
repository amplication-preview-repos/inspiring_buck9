import { Scaffolding } from "../scaffolding/Scaffolding";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  projects?: Array<Scaffolding>;
  updatedAt: Date;
};
