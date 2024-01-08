import Link from "next/link";
import SearchInput from "./SearchInput";
import Cart from "./Cart";
const routes = [
  { label: "Home", path: "/" },
  { label: "Jewelery", path: "/category/jewelery" },
  { label: "Electronics", path: "/category/electronics" },
  { label: "Men's Clothing", path: "/category/men's clothing" },
  { label: "Women's clothing", path: "/category/women's clothing" },
];

export default function NavBar() {
  return (
    <header className="w-full top-0 z-50 flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center text-white">
        <div className="w-full"></div>

        <div className=" flex w-full justify-end  ">
          <ul className="flex justify-center items-center gap-4 font-semibold border border-black bg-black/50 backdrop:opacity-45  backdrop:blur-3xl p-3 rounded-full">
            {routes.map((links, index) => (
              <li key={index}>
                <Link
                  className="hover:bg-neutral-700 p-1 rounded-md transition"
                  href={links.path}
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Cart></Cart>
      </div>
    </header>
  );
}
