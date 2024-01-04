import Example from "@/app/components/CardShow";

const fetchSingleProduct = ({ id }) => {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function PagesProduct({ params }) {
  const { id } = params;
  const data = await fetchSingleProduct({ id });
  return (
    <div>
      <Example
        productName={data.title}
        image={data.image}
        star={data.rating.rate}
        description={data.description}
        price={data.price}
        href={`/products/${id}`}
      ></Example>
    </div>
  );
}
