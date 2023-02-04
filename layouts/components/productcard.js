import dateFormat, { masks } from "dateformat";
import Image from "next/image";
import Link from "next/link";
function ProductCard({ product }) {
  return (
    <>
      <div class="item-container group mr-4 md:p-4 ">
        <Link href={`product/${product.slug}`}>
          <div
            class="item relative rounded-lg bg-white shadow-xl shadow-[#f0effc] duration-500
           md:group-hover:scale-105 md:group-hover:shadow-xl"
          >
            <Image
              src={product.thumbnail}
              alt=""
              placeholder="blur"
              className="rounded-t-2xl "
              blurDataURL="/images/blursample.png"
              width="300"
              height="300"
              priority
              style={{ height: "50% !important", width: "200%" }}
            />
            <Image
              src="/images/adobxd.png"
              layout="fixed"
              width={40}
              height={40}
              className="absolute rounded-full left-5 -translate-y-5"
            />
            <div className="flex items-center justify-between space-y-2 p-4">
              <div>
                <p className="font-roboto mt-2 text-[18px] text-[#242e46] font-extrabold">
                  {truncate(product.title, 18)}
                </p>
                <p className="text-xs font-light">
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
                className="btn-gradient px-4 py-2 text-[13px] capitalize duration-200 
                md:invisible md:group-hover:visible md:group-hover:scale-105
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
function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
export default ProductCard;
