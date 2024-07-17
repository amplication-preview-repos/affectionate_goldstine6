import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ViewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="postId" source="postId" />
        <TextInput label="viewerIp" source="viewerIp" />
        <DateTimeInput label="viewDate" source="viewDate" />
      </SimpleForm>
    </Edit>
  );
};
