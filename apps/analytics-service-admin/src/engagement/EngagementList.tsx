import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EngagementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Engagements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="postId" source="postId" />
        <TextField label="shares" source="shares" />
        <TextField label="likes" source="likes" />
        <TextField label="comments" source="comments" />
        <TextField label="engagementDate" source="engagementDate" />
      </Datagrid>
    </List>
  );
};
