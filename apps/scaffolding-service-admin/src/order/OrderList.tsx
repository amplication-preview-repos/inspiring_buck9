import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { SCAFFOLDING_TITLE_FIELD } from "../scaffolding/ScaffoldingTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Material"
          source="material.id"
          reference="Material"
        >
          <TextField source={MATERIAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="order_date" source="orderDate" />
        <ReferenceField
          label="Project"
          source="scaffolding.id"
          reference="Scaffolding"
        >
          <TextField source={SCAFFOLDING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
