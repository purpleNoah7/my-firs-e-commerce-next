export const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products?sort=desc", {
      next: {
        revalidate: 60,
      },
    }).then((res) => res.json());
  };