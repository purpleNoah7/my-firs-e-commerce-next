import Link from "next/link";

async function getCategories() {
  return fetch("https://fakestoreapi.com/products/categories", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
}

export default async function SideBar() {
  const data = await getCategories();

  return (
    <aside className="hidden sm:flex sticky p-7 mt-6 left-0 w-[300px] text-white capitalize">
      <ul className="flex flex-col gap-2">
        {data.map((cat, index) => (
          <li key={index}>
            <Link className="hover:underline" href={`/category/${cat}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
