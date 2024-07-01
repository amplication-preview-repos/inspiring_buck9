import { ScaffoldingCreateNestedManyWithoutClientsInput } from "./ScaffoldingCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  projects?: ScaffoldingCreateNestedManyWithoutClientsInput;
};
