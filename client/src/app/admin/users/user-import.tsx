"use client";

import { ChangeEvent } from "react";
import { toast } from "sonner";
import { DataTable } from "@/components/data-table/data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColumnDef } from "@tanstack/react-table";
import { callAPI } from "@/lib/utils";
import { CORE_API_URL } from "@/lib/constants";

export type UserImport = {
  id: number;
  file_name: string;
  status: string;
  created_at: string;
};

export const columns: ColumnDef<UserImport>[] = [
  {
    accessorKey: "file_name",
    header: "File Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
];  

export function UserImport({ data }: { data: UserImport[] }) {

  const handleImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;
    
    try {
      const formData = new FormData();
      formData.append("file", file);

      await callAPI(`${CORE_API_URL}/imports/users`, {
        method: "POST",
        body: formData, 
      });

      event.target.value = '';
      toast.success('Users imported successfully');
    } catch (error) {
      console.error('Error importing users: ', error);

      event.target.value = '';
      toast.error('Error importing users');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="picture">Import users from CSV</Label>
        <Input id="picture" type="file" onChange={handleImport} />
      </div>
      <DataTable columns={columns} data={data} /> 
    </div>
  );
}
