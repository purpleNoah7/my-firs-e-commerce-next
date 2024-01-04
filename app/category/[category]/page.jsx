import CardProduct from "@/app/components/CardProduct";
const fetchSingleProduct = ({ category }) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function PagesProduct({ params }) {
  const { category } = params;
  const data = await fetchSingleProduct({ category });
  return (
    <div className="flex gap-3 flex-wrap ">
      {data.map((products, index) => (
        <CardProduct
          index={index}
          key={products.id}
          img={products.image}
          price={products.price}
          productName={products.title}
          href={`/products/${products.id}`}
        ></CardProduct>
      ))}
    </div>
  );
}
