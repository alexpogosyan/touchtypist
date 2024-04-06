import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width="40" height="40" />
        <div className="text-lg hidden md:block">Touchtypist</div>
      </div>
    </Link>
  );
}
