import CardProduct from "./CardProduct";
const fetchProducts = () => {
  return fetch("https://fakestoreapi.com/products?sort=desc", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListOfProducts() {
  const products = await fetchProducts();

  return (
    <>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {products.slice(0, 4).map((post, index) => (
          <CardProduct
            index={index}
            key={post.id}
            img={post.image}
            price={post.price}
            productName={post.title}
            href={`/products/${post.id}`}
          />
        ))}
      </div>
    </>
  );
}
