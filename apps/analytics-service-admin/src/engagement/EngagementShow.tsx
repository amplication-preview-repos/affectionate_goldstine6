import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EngagementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="postId" source="postId" />
        <TextField label="shares" source="shares" />
        <TextField label="likes" source="likes" />
        <TextField label="comments" source="comments" />
        <TextField label="engagementDate" source="engagementDate" />
      </SimpleShowLayout>
    </Show>
  );
};
