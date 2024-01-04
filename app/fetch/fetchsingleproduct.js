export const fetchSingleProduct = ({ category }) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
