import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useOnClickOutside } from "../hooks/task-bar";

import { Button } from "./button";
import { Block } from "./block";
import { Clock } from "./clock";
import { LinkList, LinkListItem } from "./link-list";

import LogoInitial from "../../public/images/logo_initial.png";
import Heart from "../../public/images/heart.gif";
import Spiral from "../../public/images/spiral.gif";
import Shop from "../../public/images/shop.gif";
import Star from "../../public/images/star.gif";
import Minesweeper from "../../public/images/minesweeper.gif";

export const TaskBar = () => {
  const router = useRouter();
  const menuTriggerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useOnClickOutside(menuTriggerRef, () => setMenuOpen(false));

  const menuItems = [
    {
      label: "Booking",
      route: "/booking",
      icon: Heart.src,
    },
    {
      label: "Contact",
      route: "/contact",
      icon: Spiral.src,
    },
    {
      label: "Shop",
      route: "https://toniagost.shop/",
      icon: Shop.src,
    },
    {
      label: "Minesweeper",
      route: "/minesweeper",
      icon: Minesweeper.src,
    },
  ] as LinkListItem[];

  function handleMenuClick(item: LinkListItem) {
    setMenuOpen(false);
    router.push(item.route);
  }

  return (
    <div ref={menuTriggerRef}>
      {menuOpen ? (
        <div className="lg:hidden flex absolute bottom-full flex-col max-w-full w-[320px]">
          <LinkList
            items={[
              ...menuItems,
              {
                label: "Home",
                route: "/",
                icon: Star.src,
              },
            ]}
            onClick={handleMenuClick}
          />
        </div>
      ) : null}

      <Block>
        <div className="flex items-center">
          <Button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            active={menuOpen}
            iconLeft={
              <Image
                src={LogoInitial.src}
                alt="Logo Initials"
                layout="fill"
                objectFit="contain"
              />
            }
          >
            Menu
          </Button>

          <Button
            className="hidden lg:flex"
            active={router.route === "/"}
            onClick={() => {
              router.push("/");
            }}
            iconLeft={
              <>
                <Image
                  src={LogoInitial.src}
                  alt="Logo Initials"
                  layout="fill"
                  objectFit="contain"
                />
              </>
            }
          >
            Home
          </Button>

          <div className="hidden lg:flex gap-2 ml-2">
            {menuItems.map((item, i) => (
              <Button
                key={i}
                href={item.route}
                target={item.route.includes("https") ? "_blank" : "_self"}
                width="fixed"
                iconLeft={
                  <Image
                    src={item.icon ?? ""}
                    alt={item.label}
                    layout="fill"
                    objectFit="contain"
                  />
                }
                active={router.route === item.route}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="ml-auto">
            <Clock />
          </div>
        </div>
      </Block>
    </div>
  );
};
