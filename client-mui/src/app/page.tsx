'use client'
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleBtnNavigateToDashboard = () => {
    router.push('/admin');
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button variant="contained" onClick={handleBtnNavigateToDashboard}>Navigate To Dashboard</Button>
    </div>
  );
}
