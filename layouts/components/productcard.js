import dateFormat, { masks } from "dateformat";
import Image from "next/image";
import Link from "next/link";
function ProductCard({ product }) {
  return (
    <>
      <div class="item-container group mr-4 md:p-4 ">
        <Link href={`product/${product.slug}`}>
          <div class="item rounded-lg shadow-lg bg-white duration-500
           md:group-hover:scale-105 md:group-hover:shadow-xl">
            <Image
              src={product.thumbnail}
              alt=""
              placeholder="./images/image1.jpg"
              width="300"
              height="300"
              style={{ height: "50% !important", width: "200%" }}
            />

            <div className="space-y-2 p-4 flex justify-between items-center">
              <div className="space-y-4">
                <h4 className="font-medium font-roboto">{product.title}</h4>
                <p className="text-xs font-light">
                  {" "}
                  {dateFormat(product.data, "fullDate")}
                </p>
              </div>
              <button
                className="font-roboto rounded-lg drop-shadow-xl text-sm
                 bg-green-300 px-2 py-2 text-white md:invisible duration-200 md:group-hover:visible md:group-hover:scale-105"
              >
                Download
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default ProductCard;
