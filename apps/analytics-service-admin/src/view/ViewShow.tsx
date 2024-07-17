import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ViewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="postId" source="postId" />
        <TextField label="viewerIp" source="viewerIp" />
        <TextField label="viewDate" source="viewDate" />
      </SimpleShowLayout>
    </Show>
  );
};
