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
import Dolphin from "../../public/images/2025/rainbowdolphin.gif";
import CuteThing from "../../public/images/2025/B21.gif";
import Contact from "../../public/images/2025/email10.gif";
import classNames from "classnames";
import Chick from "../../public/images/2025/chick.gif";
import Monkeys from "../../public/images/2025/monkeys.gif";
import GK019 from "../../public/images/2025/GK019.gif";
import Heart from "../../public/images/2025/heart.gif";
import Welcome from "../../public/images/2025/welcome.gif";
import { Window } from "../components/window";

function Gif({
  image,
  size = "medium",
  link,
}: {
  image: React.ReactNode;
  size?: "medium" | "small" | "smaller" | "tiny";
  link?: { label: string; route: string };
}) {
  if (!link) {
    return (
      <figure
        className={classNames("relative", {
          "w-[200px] h-[200px]": size === "medium",
          "w-[140px] h-[140px]": size === "small",
          "w-[140px] h-[120px]": size === "smaller",
          "w-[100px] h-[100px]": size === "tiny",
        })}
      >
        {image}
      </figure>
    );
  }

  return (
    <Link href={link.route}>
      <a
        className="relative flex items-center"
        target={link.route.includes("https") ? "_blank" : "_self"}
      >
        <figure
          className={classNames("relative", {
            "w-[200px] h-[200px]": size === "medium",
            "w-[140px] h-[140px]": size === "small",
            "w-[120px] h-[120px]": size === "smaller",
            "w-[100px] h-[100px]": size === "tiny",
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
              <div className="overflow-hidden grid grid-rows-3 grid-cols-5">
                <div className="row-start-2 col-start-1 relative translate-x-4 -translate-y-1/4 rotate-12">
                  <Gif
                    image={
                      <Image
                        src={CuteThing.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative playboy gif"
                      />
                    }
                    size="smaller"
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

                <div className="row-start-2 col-start-5 translate-x-4 -translate-y-12 rotate-[20deg]">
                  <Gif
                    image={
                      <Image
                        src={Dolphin.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative dolphin gif"
                      />
                    }
                    // size="small"
                  ></Gif>
                </div>

                <div className="row-start-3 col-start-2 -translate-x-1/4">
                  <Gif
                    image={
                      <Image
                        src={Contact.src}
                        layout="fill"
                        objectFit="contain"
                        alt="Decorative contact gif"
                        className="-rotate-[20deg]"
                      />
                    }
                    link={{ label: "Contact", route: "/contact" }}
                  ></Gif>
                </div>

                <div className="grid place-items-center row-start-1 col-start-3 translate-x-4 -translate-y-6">
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
                    link={{ label: "Shop", route: "https://bytoni.shop/" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-12">
            <Gif
              image={
                <Image
                  src={Chick.src}
                  layout="fill"
                  objectFit="contain"
                  alt="Chick"
                />
              }
              size="smaller"
            />
          </div>

          <div className="absolute bottom-4 right-10">
            <Gif
              image={
                <Image
                  src={Monkeys.src}
                  layout="fill"
                  objectFit="contain"
                  alt="Chick"
                />
              }
              size="smaller"
            />
          </div>

          <div className="absolute top-12 right-12">
            <Gif
              image={
                <Image
                  src={GK019.src}
                  layout="fill"
                  objectFit="contain"
                  alt="Chick"
                />
              }
              size="tiny"
            />
          </div>

          <div className="absolute top-12 left-20 -rotate-6">
            <Gif
              image={
                <Image
                  src={Welcome.src}
                  layout="fill"
                  objectFit="contain"
                  alt="Welcome"
                />
              }
              size="tiny"
            />
          </div>

          <Window
            title="Welcome"
            icon={
              <Image
                src={Logo.src}
                width={397}
                height={100}
                alt="toniagost logo"
              />
            }
          >
            <div className="bg-black text-white text-center">
              <div></div>
            </div>
          </Window>
        </div>

        <div className="-translate-y-8 px-5">
          <Image src={Logo.src} width={397} height={100} alt="toniagost logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
