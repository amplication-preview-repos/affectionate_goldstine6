import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
      </SimpleForm>
    </Edit>
  );
};
