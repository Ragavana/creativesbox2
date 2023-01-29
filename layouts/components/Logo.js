import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <div>
      <Link href="/" className="navbar-brand hidden md:block">
        {src || logo ? (
          <Image
            width={logo_width.replace("px", "") * 10}
            height={logo_height.replace("px", "") * 10}
            src={src ? src : logo}
            alt={title}
            priority
            style={{
              height: logo_height.replace("px", "") + "rem",
              width: logo_width.replace("px", "") + "rem",
            }}
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </Link>
      <Link href="/" className="navbar-brand block md:hidden">
        {src || logo ? (
          <Image
            width={120}
            height={50}
            src={src ? src : logo}
            alt={title}
            priority
            style={{
              // height: "200px",
              // width: "50px",
            }}
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </Link>
    </div>
  );
};

export default Logo;
