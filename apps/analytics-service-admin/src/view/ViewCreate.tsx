import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ViewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="postId" source="postId" />
        <TextInput label="viewerIp" source="viewerIp" />
        <DateTimeInput label="viewDate" source="viewDate" />
      </SimpleForm>
    </Create>
  );
};
