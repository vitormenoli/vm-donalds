"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomePage = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-sm mx-auto mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-800 mb-3">Restaurantes Disponíveis</h1>
      <p className="text-gray-600 mb-2">Confira abaixo as opções disponíveis:</p>

      <ul className="space-y-2">
        <li>
          <Link
            href={`${pathname.endsWith("/") ? pathname : pathname + "/"}vm-donalds`}
            className="block bg-white p-3 rounded-md shadow-sm text-gray-800 font-medium transition hover:bg-gray-100"
          >
            🍔 VM Donalds
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;