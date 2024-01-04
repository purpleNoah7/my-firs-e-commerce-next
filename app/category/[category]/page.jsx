"use client";

import CardProduct from "@/app/components/CardProduct";
import { MotionConfig, motion, AnimatePresence, delay } from "framer-motion";
const fetchSingleProduct = ({ category }) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -10 },
};

export default async function PagesProduct({ params }) {
  const { category } = params;
  const data = await fetchSingleProduct({ category });
  return (
    <MotionConfig>
      <AnimatePresence>
        <div className="flex gap-3 flex-wrap ">
          {data.map((products, index) => (
            <motion.div
              initial="closed"
              animate="open"
              variants={variants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardProduct
                key={products.id}
                img={products.image}
                price={products.price}
                productName={products.title}
                href={`/products/${products.id}`}
              ></CardProduct>{" "}
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
}
