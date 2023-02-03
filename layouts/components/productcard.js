import dateFormat, { masks } from "dateformat";
import Image from "next/image";
import Link from "next/link";
function ProductCard({ product }) {
  return (
    <>
      <div class="item-container group mr-4 md:p-4 ">
        <Link href={`product/${product.slug}`}>
          <div
            class="item bg-white rounded-2xl shadow-lg duration-500
           md:group-hover:scale-105 md:group-hover:shadow-xl"
          >
            <Image
              src={product.thumbnail}
              alt=""
              placeholder="blur"
              className="rounded-t-2xl"
              blurDataURL="/images/blursample.png"
              width="300"
              height="300"
              priority
              style={{ height: "50% !important", width: "200%" }}
            />

            <div className="flex items-center justify-between space-y-2 p-4">
              <div className="space-y-4">
                <h4 className="font-roboto font-medium">{product.title}</h4>
                <p className="text-xs font-light">
                  {" "}
                  {dateFormat(product.data, "fullDate")}
                </p>
              </div>
              {/* <button
                className="font-roboto rounded-lg drop-shadow-xl text-sm
                 bg-green-300 px-2 py-2 text-white md:invisible duration-200 md:group-hover:visible md:group-hover:scale-105"
              >
                Download
              </button> */}
              <button
                className="btn btn-primary px-4 py-2 text-sm capitalize duration-200 
                md:invisible duration-200 md:group-hover:visible md:group-hover:scale-105
              "
              >
                download
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default ProductCard;
