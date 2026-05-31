export const fetchProducts = async ({ pageParam = 1 }) => {
  const limit = 8;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${
      (pageParam - 1) * limit
    }`
  );

  return res.json();
};