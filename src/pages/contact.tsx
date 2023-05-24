import type { NextPage } from "next";
import Image from "next/image";

import { Window } from "../components/window";
import { SEO } from "../components/seo";

import Spiral from "../../public/images/spiral.gif";
import Email from "../../public/images/twirlemail.gif";
import Instagram from "../../public/images/instagram.webp";
import TikTok from "../../public/images/tiktok.png";

const Contact: NextPage = () => {
  return (
    <>
      <SEO title="Contact me" />

      <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
        <Window
          title="Contact"
          actions="Hey there!"
          icon={
            <Image
              src={Spiral.src}
              layout="fill"
              objectFit="contain"
              alt="Booking icon"
            />
          }
        >
          <div>
            <p>
              Feel free to drop me a message on instagram or e-mail me if you
              have any questions. I normally reply within 2-3 business days .
            </p>
            <h3 className="mt-6 text-xl">Contact</h3>
            <div className="flex gap-4">
              <a
                className="mt-2"
                href="mailto:toniagostph@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Email.src}
                  width={50}
                  height={66}
                  alt="Spinning e-mail gif"
                />
              </a>
              <a
                className="mt-2"
                href="https://www.instagram.com/toniagost/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Instagram.src}
                  width={66}
                  height={66}
                  alt="Spinning e-mail gif"
                />
              </a>
              <a
                className="mt-2"
                href="https://www.tiktok.com/@toniagost"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={TikTok.src}
                  width={66}
                  height={66}
                  alt="Spinning e-mail gif"
                />
              </a>
            </div>
          </div>
        </Window>
      </div>
    </>
  );
};

export default Contact;
