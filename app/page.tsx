import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/hello"} className="text-2xl font-bold">
        Go to Hello Page
      </Link>
    </main>
  );
}
