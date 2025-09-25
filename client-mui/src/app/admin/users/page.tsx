import { Button } from "@mui/material";
import UsersTable from "./users-table";
import { usersCoreAPI } from "@/lib/apis/core-api";

export default async function AdminUsers() {
  const users = await usersCoreAPI.getAll();

  return (
    <div>
      <div className="flex justify-end pb-5">
        <Button variant="contained">New</Button>
      </div>
      <UsersTable users={users}></UsersTable>
    </div>
  );
}
