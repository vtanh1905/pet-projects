import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button asChild>
        <Link href="/admin">Navigate to Admin Page</Link>
      </Button>
    </div>
  );
}
