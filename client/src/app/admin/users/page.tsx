import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getUsers, getUserImports } from "@/lib/core-api";
import { UserImport } from "./user-import";
import UserTable from "./user-table";

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
          <UserTable users={users} />
        </div>
      </TabsContent>
      <TabsContent value="import">
        <UserImport data={userImports} />
      </TabsContent>
    </Tabs>
  );
}
