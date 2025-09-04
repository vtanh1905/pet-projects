import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Users() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <div className="flex justify-end">
        <TabsList className="grid w-auto grid-cols-2">
          <TabsTrigger value="account">List</TabsTrigger>
          <TabsTrigger value="password">Import</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="account">List of users</TabsContent>
      <TabsContent value="password">Import users</TabsContent>
    </Tabs>
  );
}
