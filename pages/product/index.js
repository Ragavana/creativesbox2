import ProductCard from "@components/productcard";
import Image from "next/image";
import { getAllProductsDb } from "../api/products";

function Product({ isSuccess, products }) {
  return (
    <>
      <section id="products">
        <div
          class="grid grid-cols-1  bg-white
        md:space-y-0 md:space-x-0 md:m-2 md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 lg:space-x-0 lg:m-2"
        >
          {isSuccess ? (
            <>
              {products.map((product) => {
                return (
                  <>
                    <ProductCard product={product} />
                  </>
                );
              })}
            </>
          ) : (
            <>
              <h1>Something Went Wrong</h1>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Product;

export async function getStaticProps() {
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  let response = await getAllProductsDb();
  console.log(response);

  return {
    props: {
      products: response["message"],
      isSuccess: response["success"],
    },
    revalidate: 43200, // In seconds
  };
}
