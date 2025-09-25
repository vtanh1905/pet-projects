"use client";
import { Divider, MenuItem, MenuList, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Users",
      pathname: "/admin/users",
    }
  ];

  return (
    <Stack
      direction="row"
      className="h-screen"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            selected={pathname === item.pathname}
            disabled={pathname === item.pathname}
            onClick={() => router.push(item.pathname)}
          >
            {item.name}
          </MenuItem>
        ))}
        <MenuItem onClick={() => router.push("/")}>Back</MenuItem>
      </MenuList>
      <div className="p-3 w-screen">{children}</div>
    </Stack>
  );
}
