"use client";

import { useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
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

export type UserTableProps = {
  users: User[];
};

export default function UserTable({ users } : UserTableProps) {
  const router = useRouter();

  return (
    <div>
      <div className='flex justify-end pb-4'>
        <Button onClick={() => { router.push('/admin/users/add') }}>Add</Button>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
