import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

const adminMenuItems = [
  {
    label: "My Account",
    href: "/admin/my-account",
  },
  {
    label: "Users",
    href: "/admin/users",
  },
];

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {adminMenuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
              <SidebarMenuButton>
                <Link href={item.href}>{item.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
