import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
