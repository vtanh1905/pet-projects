import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DataTable } from "../../../components/data-table/data-table";
import { getUsers, getUserImports } from "@/lib/core-api";
import { UserImport } from "./user-import";
import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
  },
];

export default async function Users() {
  const [users, userImports] = await Promise.all([getUsers({ cache: "no-store" }), getUserImports({ cache: "no-store" })]);

  return (
    <Tabs defaultValue="account" className="w-full">
      <div className="flex justify-end">
        <TabsList className="grid w-auto grid-cols-2">
          <TabsTrigger value="account">List</TabsTrigger>
          <TabsTrigger value="import">Import</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="account">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={users} />
        </div>
      </TabsContent>
      <TabsContent value="import">
        <UserImport data={userImports} />
      </TabsContent>
    </Tabs>
  );
}
