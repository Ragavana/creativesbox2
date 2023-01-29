import { useRouter } from "next/router";
import { getAllProductsDb, getProductsDb } from "../api/products";
import { ColorRing } from "react-loader-spinner";
//import Layout from "../layout";
//import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Base from "@layouts/Baseof";
import { useState } from "react";

import { isMobile } from "react-device-detect";
import {
  IoArrowBack,
  IoArrowBackCircle,
  IoArrowBackCircleOutline,
  IoArrowBackCircleSharp,
  IoArrowForward,
} from "react-icons/io5";

function Product({ product, isSuccess }) {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };
  const indicatorStyles = {
    // width: 8,
    // height: 8,
    display: "inline-block",
    margin: "0 8px",
  };
  const customRenderThumb = (children) =>
    children.map((item) => {
      //
      <h1 style={{ ...arrowStyles, left: 15 }}>bkfbefgequfqfequifqgfq</h1>;
    });
  const [leftarrowicon, setLeftArrowIcon] = useState("outline");
  const changeIconleft = (state) => {
    if (state === "outline") {
      return "arrow";
    }
    return "outline";
  };

  const router = useRouter();
  if (router.isFallback) {
    return (
      <Base>
        <>
          <section className="section">
            <div>
              <section id="product">
                <div className="flex items-center justify-center">
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
                <h1 className="text-center">Product not found</h1>
              </section>
            </div>
          </section>
        </>
      </Base>
    );
  }

  return (
    <>
      <h1></h1>
      <Base>
        <section className="section">
          <div>
            <section id="product">
              <Carousel
                autoPlay
                interval="5000"
                transitionTime="5000"
                infiniteLoop
                centerMode={true}
                showThumbs={false}
                showArrows={isMobile?false:true}
                renderArrowNext={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className=" h-10 w-10 rounded-full bg-zinc-200  text-lg hover:bg-zinc-800 hover:text-white"
                      style={{ ...arrowStyles, right: 10 }}
                    >
                      <IoArrowForward className="ml-3" />
                    </button>
                  )
                }
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className=" h-10 w-10 rounded-full bg-zinc-200  text-lg hover:bg-zinc-800 hover:text-white"
                      style={{ ...arrowStyles, left: 10 }}
                    >
                      <IoArrowBack className="ml-3" />
                    </button>
                  )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                    return (
                      <li
                        className="h-3 w-3 rounded-full bg-zinc-700"
                        style={{ ...indicatorStyles }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                      />
                    );
                  }
                  return (
                    <li
                      className="h-3 w-3 rounded-full bg-zinc-200"
                      style={indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                    />
                  );
                }}
              >
                {product[0].image.map((img, index) => {
                  return (
                    <div key={index} className="md:h-96">
                      <img
                        src={img}
                        className="h-full w-full md:m-auto md:px-10"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </section>
          </div>
        </section>
      </Base>
    </>
  );
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
