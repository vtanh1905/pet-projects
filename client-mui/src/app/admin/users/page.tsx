import UsersTable from "./users-table";
import { usersCoreAPI } from "@/lib/apis/core-api";
import UsersToolbar from "./users-toolbar";

export default async function AdminUsers() {
  const users = await usersCoreAPI.getAll();

  return (
    <div>
      <UsersToolbar></UsersToolbar>
      <UsersTable users={users}></UsersTable>
    </div>
  );
}
