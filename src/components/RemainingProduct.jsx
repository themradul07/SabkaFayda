import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../lib/utils";
import { Star } from "lucide-react";
import { ProductSkeleton } from "./ProductSkeleton";
import { motion, spring } from "framer-motion";
import { useData } from "../context/appContext";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{
        y: -0.1,
        scale: 1.009
      }}
      transition={{
        type: spring,
        stiffness: 300

      }}

      className="rounded-md border border-gray-200 bg-white p-2  w-full h-full">
      <div className="overflow-hidden rounded-md relative">
        <img
          loading="lazy"
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover"
        />
        <div className="bottom-0 absolute w-full h-12 bg-gray-100 flex  justify-around items-center">

          <div className="bg-amber-200 py-1 px-2 rounded-md  "> New Arrival</div>
          <div className="bg-green-200 py-1 px-2 rounded-md">Earn {Math.ceil(Math.random()*100)}</div>
          <div className="bg-pink-200 py-1 px-2 rounded-md "> Refer {Math.ceil(Math.random()*10)}</div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-semibold">
          {product.title}
        </h3>

        <p className="truncate text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs text-gray-500 line-through">
            ₹{product.oldPrice}
          </span>

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  const  {selectedProduct ,setSelectedProduct} = useData();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 1,

    getNextPageParam: (lastPage, pages) => {
      const loadedProducts = pages.reduce(
        (total, page) => total + page.products.length,
        0
      );

      return loadedProducts < lastPage.total
        ? pages.length + 1
        : undefined;
    },
  });

  const products =
    data?.pages.flatMap((page) => page.products) ?? [];


  if (error) {
    return <p>Failed to load products</p>;
  }

  return (
    <>
      <div className="bg-gray-100 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={product.id}
              onClick={() => {
                setSelectedProduct(product)
                console.log("ADDED SUCCESSFULLY");
                console.log(selectedProduct)
              }}
            >

              <ProductCard key={product.id} product={product} />
            </motion.div>
          ))}
        </div>
        {isFetchingNextPage && <div className="grid grid-cols-1 mt-2  gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
          }

        </div>}
      </div>


      <motion.button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="h-16 w-full bg-gray-50 hover:bg-gray-200 disabled:cursor-not-allowed overflow-hidden"
        whileHover={{ scaleY: 1.03 }}
        whileTap={{ scaleY: 0.97 }}
      >
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
            ? "Explore More Products"
            : "No More Products"}
      </motion.button>
    </>
  );
}