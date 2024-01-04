"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, AnimatePresence, delay } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -10 },
};
export default function CardProduct({
  index,
  href,
  img,
  productName,
  price,
  description,
}) {
  const delay = index;
  return (
    <MotionConfig>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate="open"
          variants={variants}
          transition={{ duration: 0.6, delay: delay * 0.05 }}
        >
          <div class="max-w-[100px] min-h-[470px] p-3 max-h-[550px] grid grid-cols-1 place-items-center min-w-80  border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700 items-center justify-center overflow-hidden ">
            <div
              className="relative cursor-pointer before:transition rounded-full backdrop-blur-3xl w-full h-full flex items-center justify-center
              before:content-[' ']
              before:bg-slate-600
              before:rounded-full
              before:absolute
              before:blur-3xl
              before:left-10
              before:-top-10
              before:-z-20
              before:w-full
              before:h-56
              hover:before:bg-blue-950   
      "
            >
              <a href={href}>
                <Image
                  className="max-h-40"
                  width={160}
                  height={160}
                  class="rounded-3xl"
                  src={img}
                  alt={productName}
                />
              </a>
            </div>
            <div class="p-5 basis-10">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {productName}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
              <Link
                href={href}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {`$${price}`}{" "}
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
