import { useRouter } from "next/router";
import { getAllProductsDb, getProductsDb } from "../api/products";
import { ColorRing } from "react-loader-spinner";
//import Layout from "../layout";
import Image from "next/image";

function Product({ product, isSuccess }) {
  return (
    <>
    <h1>product[0].title</h1>
    </>
  )
  // const router = useRouter();
  // if (router.isFallback) {
  //   return (
  //     <Layout>
  //       <>
  //         <div className="flex items-center justify-center">
  //           <ColorRing
  //             visible={true}
  //             height="80"
  //             width="80"
  //             ariaLabel="blocks-loading"
  //             wrapperStyle={{}}
  //             wrapperClass="blocks-wrapper"
  //             colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  //           />
  //         </div>
  //         <h1 className="text-center">Product not found</h1>
  //       </>
  //     </Layout>
  //   );
  // }
  // return (
  //   <Layout>
  //     <>
  //       {isSuccess && product.length >= 1 ? (
  //         <>
  //           <>
  //             <div className="flex flex-col text-center space-y-2 mx-auto font-roboto text-zinc-700 md:flex-row md:space-x-5">
  //               <h1 className="font-bold">{product[0].slug}</h1>
  //               <h2 className="font-bold">{product[0].title}</h2>
  //               <p>{product[0].description}</p>
  //               <Image
  //                 src={product[0].thumbnail}
  //                 alt=""
  //                 placeholder="./images/image1.jpg"
  //                 width="300"
  //                 height="300"
  //                 style={{
  //                   height: "50% !important",
  //                   width: "200%",
  //                   padding: "1rem",
  //                 }}
  //               />
  //             </div>
  //           </>
  //         </>
  //       ) : (
  //         <>
  //           {" "}
  //           <>
  //             <div className="flex items-center justify-center">
  //               <ColorRing
  //                 visible={true}
  //                 height="80"
  //                 width="80"
  //                 ariaLabel="blocks-loading"
  //                 wrapperStyle={{}}
  //                 wrapperClass="blocks-wrapper"
  //                 colors={[
  //                   "#e15b64",
  //                   "#f47e60",
  //                   "#f8b26a",
  //                   "#abbd81",
  //                   "#849b87",
  //                 ]}
  //               />
  //             </div>
  //           </>
  //           <h1 className="text-center">Product not found</h1>
  //         </>
  //       )}
  //     </>
  //   </Layout>
  // );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await getProductsDb(params.productId);
  console.log(response);
  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product: response["message"],
      isSuccess: response["success"],
    },
    //revalidate: 43200,
  };
}

export async function getStaticPaths() {
  const response = await getAllProductsDb();
  const isSuccess = response["success"];
  const product = response["message"];
  const paths = product.map((product) => {
    return {
      params: { productId: `${product.slug}` },
    };
  });
  console.log(paths);

  // return {
  //   paths: [{ params: { productId: "83869a5b-dcbc-47dc-80c3-3d9028f21ce9" } }],
  //   fallback: true,
  // };

  return {
    paths: paths,
    fallback: true,
  };
}
