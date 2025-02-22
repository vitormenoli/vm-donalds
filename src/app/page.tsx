"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomePage = () => {
  const pathname = usePathname(); // Obtém o path atual

  return (
    <Link href={`${pathname.endsWith("/") ? pathname : pathname + "/"}vm-donalds`}>
      Acesse VM Donalds clicando aqui!
    </Link>
  );
};

export default HomePage;
