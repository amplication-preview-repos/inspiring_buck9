import { Scaffolding as TScaffolding } from "../api/scaffolding/Scaffolding";

export const SCAFFOLDING_TITLE_FIELD = "name";

export const ScaffoldingTitle = (record: TScaffolding): string => {
  return record.name?.toString() || String(record.id);
};
