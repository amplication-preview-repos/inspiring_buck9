import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SCAFFOLDING_TITLE_FIELD } from "./ScaffoldingTitle";
import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const ScaffoldingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="end_date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="start_date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Material"
          target="projectId"
          label="Materials"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="projectId" label="Orders">
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
