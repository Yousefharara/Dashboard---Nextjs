import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full min-h-screen">
      <Link href={"/dashboard"}>
        <Button variant={"link"} size={"icon"} className="text-3xl">
          Dashboard
        </Button>
      </Link>
    </main>
  );
}
