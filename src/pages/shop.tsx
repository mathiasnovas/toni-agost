import type { NextPage } from "next";
import Image from "next/image";

import { Window } from "../components/window";
import { BorderBox } from "../components/border-box";

import ShopBanner from "../../public/images/shop_banner.jpg";
import ShopBannerPortrait from "../../public/images/shop_banner_phone.jpg";

const Shop: NextPage = () => {
  return (
    <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
      <BorderBox>
        <a href="https://toniagost.shop" target="_blank" rel="noreferrer">
          <figure className="relative hidden md:block">
            <Image
              src={ShopBanner.src}
              width={700}
              height={400}
              alt="Shop banner"
            />
          </figure>

          <figure className="relative md:hidden">
            <Image
              src={ShopBannerPortrait.src}
              width={400}
              height={500}
              alt="Shop banner"
            />
          </figure>
        </a>
      </BorderBox>
    </div>
  );
};

export default Shop;
