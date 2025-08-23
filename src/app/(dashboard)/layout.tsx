import Menu from "@/components/layout/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* Left  */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4">
        <Link href="/" 
        className="flex items-center justify-center lg:justify-start gap-2">
        <Image
        src="/logo.jpg"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full"
        />
        <h1 className="hidden lg:block">Cambridge Cps</h1>
        </Link>
        <Menu/>
    </div>
    {/* Right */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
  </div>;
}
