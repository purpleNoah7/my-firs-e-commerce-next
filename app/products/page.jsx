import CardProduct from "../components/CardProduct";
const fetchProductss = () => {
  return fetch("https://fakestoreapi.com/products?sort=desc", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function productsPage() {
  const products = await fetchProductss();

  return (
    <>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {products.slice(0, 8).map((post, index) => (
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
