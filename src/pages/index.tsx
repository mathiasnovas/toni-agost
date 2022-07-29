import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { SEO } from "../components/seo";
import { BorderBox } from "../components/border-box";

import Logo from "../../public/images/logo.gif";
import TattooGun from "../../public/images/tatgun.gif";
import Playboy from "../../public/images/playboy.gif";
import Cowgirl from "../../public/images/cowgirl.gif";
import Butteryfly from "../../public/images/butterfly.gif";
import Dollar from "../../public/images/shop.gif";
import classNames from "classnames";

function Gif({
  image,
  size = "medium",
  link,
}: {
  image: React.ReactNode;
  size?: "medium" | "small" | "smaller";
  link?: { label: string; route: string };
}) {
  if (!link) {
    return (
      <figure
        className={classNames("relative", {
          "w-[200px] h-[200px]": size === "medium",
          "w-[140px] h-[140px]": size === "small",
          "w-[140px] h-[120px]": size === "smaller",
        })}
      >
        {image}
      </figure>
    );
  }

  return (
    <Link href={link.route}>
      <a className="relative flex items-center">
        <figure
          className={classNames("relative", {
            "w-[200px] h-[200px]": size === "medium",
            "w-[140px] h-[140px]": size === "small",
            "w-[120px] h-[120px]": size === "smaller",
          })}
        >
          {image}
        </figure>

        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <BorderBox>
            <div className="bg-black text-white text-center">{link.label}</div>
          </BorderBox>
        </div>
      </a>
    </Link>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Toni's desktop. Here you can make a tattoo booking or chill with a game of minesweeper. Enjoy!"
      />

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="hidden lg:block absolute left-0 top-0 w-full h-full">
          <div className="grid place-items-center h-full">
            <div className="lg:block w-[1024px] bg-opacity-40">
              <div className="grid grid-rows-3 grid-cols-5">
                <div className="row-start-2 col-start-1 relative translate-x-4 translate-y-1/4 rotate-12">
                  <Gif
                    image={
                      <Image
                        src={Playboy.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative playboy gif"
                      />
                    }
                    size="small"
                  ></Gif>
                </div>

                <div className="row-start-3 col-start-4 translate-y-2 -translate-x-6">
                  <Gif
                    image={
                      <Image
                        src={TattooGun.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative tattoo gun gif"
                      />
                    }
                    link={{ label: "Booking", route: "/booking" }}
                  ></Gif>
                </div>

                <div className="row-start-2 col-start-5 translate-x-4">
                  <Gif
                    image={
                      <Image
                        src={Butteryfly.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative butterfly gif"
                      />
                    }
                    size="small"
                  ></Gif>
                </div>

                <div className="row-start-3 col-start-2">
                  <Gif
                    image={
                      <Image
                        src={Cowgirl.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative cowgirl gif"
                      />
                    }
                    link={{ label: "Contact", route: "/contact" }}
                  ></Gif>
                </div>

                <div className="grid place-items-center row-start-1 col-start-4 translate-x-4 -translate-y-6">
                  <Gif
                    image={
                      <Image
                        src={Dollar.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative dollar gif"
                      />
                    }
                    size="smaller"
                    link={{ label: "Shop", route: "/shop" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-translate-y-8 px-5">
          <Image src={Logo.src} width={397} height={100} alt="toniagost logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
