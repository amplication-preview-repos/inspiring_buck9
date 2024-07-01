import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MATERIAL_TITLE_FIELD } from "../material/MaterialTitle";
import { SCAFFOLDING_TITLE_FIELD } from "../scaffolding/ScaffoldingTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
