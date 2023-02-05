import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import Posts from "@partials/Posts";
import { getAllProductsDb } from "pages/api/products";
const { blog_folder } = config.settings;
import ProductCard from "@components/productcard";

// product pagination
const ProductPagination = ({
  products,
  authors,
  currentPage,
  pagination,
  isSuccess,
}) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  // const totalPages = Math.ceil(products.length / pagination);
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Base>
      <section className="section">
        <div className="ml-3 md:ml-0">
          {/* <Posts className="mb-16" posts={currentPosts} authors={authors} />
          <Pagination totalPages={totalPages} currentPage={currentPage} /> */}
          <section id="products">
            <div
              class="grid -translate-y-10  grid-cols-1 bg-white mx-24
        md:grid-cols-3 2xl:grid-cols-4"
            >
              {isSuccess ? (
                <>
                  {products.map((product) => {
                    return (
                      <>
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                        <ProductCard product={product} />
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <h1 className="font-roboto text-center text-xl">
                    Something Went Wrong
                  </h1>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
    </Base>
  );
};

export default ProductPagination;

// // blog pagination
// const BlogPagination = ({ posts, authors, currentPage, pagination }) => {
//   const indexOfLastPost = currentPage * pagination;
//   const indexOfFirstPost = indexOfLastPost - pagination;
//   const totalPages = Math.ceil(posts.length / pagination);
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   return (
//     <Base>
//       <section className="section">
//         <div className="container">
//           <Posts className="mb-16" posts={currentPosts} authors={authors} />
//           <Pagination totalPages={totalPages} currentPage={currentPage} />
//         </div>
//       </section>
//     </Base>
//   );
// };

// export default BlogPagination;

// // get blog pagination slug
export const getStaticPaths = () => {
  // const getAllSlug = getSinglePage(`content/${blog_folder}`);
  // const allSlug = getAllSlug.map((item) => item.slug);
  // const { pagination } = config.settings;
  // const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < 10; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: true,
  };
};

// // get blog pagination content
// export const getStaticProps = async ({ params }) => {
//   const currentPage = parseInt((params && params.slug) || 1);
//   const { pagination } = config.settings;
//   const posts = getSinglePage(`content/${blog_folder}`);
//   const authors = getSinglePage("content/authors");

//   return {
//     props: {
//       pagination: pagination,
//       posts: posts,
//       authors: authors,
//       currentPage: currentPage,
//     },
//   };
// };

export async function getStaticProps() {
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  console.log("regenerated");
  let response = await getAllProductsDb();
  console.log(response);

  return {
    props: {
      products: response["message"],
      isSuccess: response["success"],
    },
    revalidate: 60, // In seconds
  };
}
