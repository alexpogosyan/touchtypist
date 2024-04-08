import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-between gap-2">
        <Image src="/logo.svg" alt="Logo" width="40" height="40" />
        <div className=" hidden text-lg md:block  ">Touchtypist</div>
      </div>
    </Link>
  );
}
