"use client";
import { MotionConfig, motion, AnimatePresence, delay } from "framer-motion";
import { fetchProducts } from "../fetch/fetchProducts";
import CardProduct from "./CardProduct";

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
                  className={
                    index === 0
                      ? "md:col-span-4 md:row-span-2"
                      : "md:col-span-2 md:row-span-1"
                  }
                  href={`/products/${post.id}`}
                />{" "}
              </motion.div>
            ))}{" "}
          </AnimatePresence>
        </MotionConfig>
      </div>
    </>
  );
}
