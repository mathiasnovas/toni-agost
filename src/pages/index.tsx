import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { SEO } from "../components/seo";

import Logo from "../../public/images/logo.gif";
import TattooGun from "../../public/images/tatgun.gif";
import Playboy from "../../public/images/playboy.gif";
import Cowgirl from "../../public/images/cowgirl.gif";
import Butteryfly from "../../public/images/butterfly.gif";
import Dollar from "../../public/images/shop.gif";

function Gif({
  image,
  size = 200,
  link,
}: {
  image: React.ReactNode;
  size?: number;
  link?: { label: string; route: string };
}) {
  if (!link) {
    return (
      <figure className={`relative w-[${size}px] h-[${size}px]`}>
        {image}
      </figure>
    );
  }

  return (
    <Link href={link.route}>
      <a className="relative flex items-center">
        <figure className={`relative w-[${size}px] h-[${size}px]`}>
          {image}
        </figure>

        <div className="absolute top-1/2 -translate-y-1/2 p-2 bg-black text-white text-center w-full">
          {link.label}
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
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="grid place-items-center h-full">
            <div className="hidden lg:block w-[1024px] bg-opacity-40">
              <div className="hidden grid-rows-3 grid-cols-5">
                <div className="row-start-3 col-start-2 relative -translate-x-1/3 translate-y-1/4 rotate-12">
                  <Gif
                    image={
                      <Image
                        src={Playboy.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative playboy gif"
                      />
                    }
                    size={120}
                  ></Gif>
                </div>

                <div className="row-start-3 col-start-3">
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

                <div className="row-start-1 col-start-5">
                  <Gif
                    image={
                      <Image
                        src={Butteryfly.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative butterfly gif"
                      />
                    }
                  ></Gif>
                </div>

                <div className="row-start-2 col-start-1">
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

                <div className="grid place-items-center row-start-2 col-start-5">
                  <Gif
                    image={
                      <Image
                        src={Dollar.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative dollar gif"
                      />
                    }
                    size={140}
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
