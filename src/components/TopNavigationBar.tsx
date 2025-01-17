import Link from "next/link";

export function TopNavigationBar() {
  return (
    <nav className="z-10 flex flex-col h-[8rem] items-left border-b border-gray-700 bg-dark-blue p-7 shadow-lg">
      <Link href="/" prefetch={false} aria-label="Home" className="text-5xl">
        DAYZ.IO
      </Link>
      <p className="text-xs pt-2 text-neutral-500">
        HOME {">"} WEAPONS {">"} ASSAULT RIFLES
      </p>
    </nav>
  );
}
