import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MATERIAL_TITLE_FIELD } from "./MaterialTitle";
import { SCAFFOLDING_TITLE_FIELD } from "../scaffolding/ScaffoldingTitle";

export const MaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="Project"
          source="scaffolding.id"
          reference="Scaffolding"
        >
          <TextField source={SCAFFOLDING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="materialId"
          label="Orders"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
