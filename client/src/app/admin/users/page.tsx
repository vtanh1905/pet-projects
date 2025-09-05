import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getUsers } from "@/lib/core-api";

export default async function Users() {
  const users = await getUsers({ cache: "no-store" });

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
      <TabsContent value="import">Import users</TabsContent>
    </Tabs>
  );
}
