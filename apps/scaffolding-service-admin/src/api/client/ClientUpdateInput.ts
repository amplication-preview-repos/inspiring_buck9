import { ScaffoldingUpdateManyWithoutClientsInput } from "./ScaffoldingUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  projects?: ScaffoldingUpdateManyWithoutClientsInput;
};
