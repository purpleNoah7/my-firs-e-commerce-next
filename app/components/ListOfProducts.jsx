"use client";
import { MotionConfig, motion, AnimatePresence, delay } from "framer-motion";

import CardProduct from "./CardProduct";
const fetchProducts = () => {
  return fetch("https://fakestoreapi.com/products?sort=desc", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -10 },
};
export default async function ListOfProducts() {
  const products = await fetchProducts();

  return (
    <>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <MotionConfig>
          <AnimatePresence>
            {products.slice(0, 4).map((post, index) => (
              <motion.div
                key={post.id}
                initial="closed"
                animate="open"
                variants={variants}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <CardProduct
                  key={post.id}
                  img={post.image}
                  price={post.price}
                  productName={post.title}
                  href={`/products/${post.id}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </MotionConfig>
      </div>
    </>
  );
}
