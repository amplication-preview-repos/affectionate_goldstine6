import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const EngagementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="comments" source="comments" />
        <DateTimeInput label="engagementDate" source="engagementDate" />
      </SimpleForm>
    </Edit>
  );
};
