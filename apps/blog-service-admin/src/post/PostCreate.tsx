import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
      </SimpleForm>
    </Create>
  );
};
