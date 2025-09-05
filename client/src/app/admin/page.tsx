import { redirect, RedirectType } from "next/navigation";

export default function Admin() {
    redirect("/admin/users", RedirectType.replace);
}
