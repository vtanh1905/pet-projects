"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UsersToolbar() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end pb-5">
        <Button
          variant="contained"
          onClick={() => router.push("/admin/users/add")}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
