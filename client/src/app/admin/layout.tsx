import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/app/admin/admin-sidebar"
 
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="p-4">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}