import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const EngagementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="comments" source="comments" />
        <DateTimeInput label="engagementDate" source="engagementDate" />
      </SimpleForm>
    </Create>
  );
};
