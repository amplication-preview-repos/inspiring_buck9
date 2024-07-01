import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { MaterialTitle } from "../material/MaterialTitle";
import { ScaffoldingTitle } from "../scaffolding/ScaffoldingTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="material.id"
          reference="Material"
          label="Material"
        >
          <SelectInput optionText={MaterialTitle} />
        </ReferenceInput>
        <DateTimeInput label="order_date" source="orderDate" />
        <ReferenceInput
          source="project.id"
          reference="Scaffolding"
          label="Project"
        >
          <SelectInput optionText={ScaffoldingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
