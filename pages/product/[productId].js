import { useRouter } from "next/router";
import { getAllProductsDb, getProductsDb } from "../api/products";
import { ColorRing } from "react-loader-spinner";
//import Layout from "../layout";
//import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Base from "@layouts/Baseof";
import { useState } from "react";
import dateFormat, { masks } from "dateformat";

import { isMobile } from "react-device-detect";
import {
  IoArrowBack,
  IoArrowBackCircle,
  IoArrowBackCircleOutline,
  IoArrowBackCircleSharp,
  IoArrowForward,
  IoArrowRedoCircle,
  IoArrowRedo,
  IoCaretForwardCircle,
  IoShare,
  IoShareOutline,
  IoShareSharp,
  IoShareSocial,
} from "react-icons/io5";
import LightGallery from "lightgallery/react";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
import { RWebShare } from "react-web-share";

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
          <section id="product">
            <div className="md:mx-20 2xl:mx-44 flex -translate-y-12 flex-col md:flex-row">
              <div className="w-full bg-white md:w-5/6">
                <LightGallery
                  mode="lg-fade"
                  plugins={[lgZoom, lgThumbnail, lgVideo]}
                >
                  {/* {product[0].thumbvedio ? (
                    <>
                      <div
                        key={`thumbvedio-` + product[0]._id}
                        data-lg-size="1406-1390"
                        className="bg-white p-2"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        data-src={product[0].thumbvedio}
                        data-poster="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
                        data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
                      >
                        <Image
                          alt={`thumbvedio-` + product[0]._id}
                          placeholder="blur"
                          blurDataURL="/images/blursample.png"
                          width="300"
                          height="300"
                          priority
                          style={{ height: "50% !important", width: "200%" }}
                          src={product[0].thumbnail}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )} */}
                  {product[0].thumbnail ? (
                    <>
                      <div
                        key={`thumbnail-` + product[0]._id}
                        data-lg-size="1406-1390"
                        className="bg-white p-2"
                        data-src={product[0].thumbnail}
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                      >
                        <Image
                          // className="w-full px-4 py-4"
                          // style={{ height: `70vh` }}
                          placeholder="blur"
                          className="rounded-b-lg border"
                          blurDataURL="/images/blursample.png"
                          width="2000"
                          height="2000"
                          priority
                         // style={{ height: "50% !important", width: "100%" }}
                          alt={`thumbnail-` + product[0]._id}
                          src={product[0].thumbnail}
                        />
                        {/* <img
                          style={{ height: "50% !important", width: "100%" }}
                          alt={`thumbnail-` + product[0]._id}
                          src={product[0].thumbnail}
                        ></img> */}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* {product[0].image.map((img, index) => {
                    return (
                      <div
                        key={`image-` + index}
                        data-lg-size="1406-1390"
                        className="bg-white p-2"
                        data-src={img}
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                      >
                        <Image
                          placeholder="blur"
                          className="rounded-b-lg border border-t-4"
                          blurDataURL="/images/blursample.png"
                          width="300"
                          height="300"
                          priority
                          style={{ height: "50% !important", width: "200%" }}
                          alt={`image-` + index}
                          src={img}
                        />
                      </div>
                    );
                  })} */}
                </LightGallery>
              </div>
              <div className="ml:1 2xl:ml-3 w-full md:w-2/6">
                <RWebShare
                  data={{
                    text: `${product[0].description}`,
                    url: `${product[0].thumbnail}`,
                    title: `${product[0].title}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button>
                    <div
                      className="w-30 m-2 flex items-center justify-start space-x-1 rounded border border-zinc-300
                    p-1 
                   px-4 text-sm capitalize"
                    >
                      <IoArrowRedo className="text-sm text-[#706f83]" />
                      <p className="font-semibold text-[#706f83]"> Share </p>
                    </div>
                  </button>
                </RWebShare>

                <p className="mx-2 mt-1 text-[20px] font-bold text-zinc-900 md:text-[22px] 2xl:text-[24px]">
                  {product[0].title}
                </p>
                <p className="mx-2 mb-3 text-[11px] font-light md:text-[12px]">
                  {dateFormat(product[0].date, "mediumDate")}
                </p>
                {product[0].tags.map((tag, index) => {
                  return (
                    <button
                      key={`tags-` + index}
                      className="m-1 my-1  rounded 
                       bg-[#f0f0f0] p-1 px-3 font-extrabold lowercase   text-[#000]
                          md:text-[12px] 2xl:text-[13px]"
                    >
                      {tag}
                    </button>
                  );
                })}
                <p className="mx-2 my-3 md:text-[12px] 2xl:text-[14px]  text-zinc-600">
                  {product[0].description}
                </p>
                <div className="m-2">
                  <a href={product[0].source} download>
                    <button
                      className="btn-gradient mt-1 w-full rounded px-4 py-3 text-[13px] font-semibold capitalize
              "
                    >
                      download file
                    </button>
                  </a>
                  <a href={`/`}>
                    <button
                      className="btn my-2  mt-1 w-full rounded border-zinc-500 px-4 py-3 text-[13px] font-semibold capitalize
              "
                    >
                      Shop More
                    </button>
                  </a>
                  <p className="mx-10 text-center text-[11px] text-zinc-400">
                    * Source files may not contain third-party content (e.g.
                    icons, images)
                  </p>
                </div>
              </div>
            </div>
          </section>
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
