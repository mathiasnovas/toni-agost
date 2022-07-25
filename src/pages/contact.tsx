import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Window } from "../components/window";

import Spiral from "../../public/images/spiral.gif";
import Email from "../../public/images/twirlemail.gif";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Making your booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              @to-do: A short text about how to contact me and what to expect
              when doing so.
            </p>

            <h3 className="mt-6 text-xl">Social media</h3>
            <a
              className="text-primary underline"
              href="https://www.instagram.com/toniagost/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <h3 className="mt-6 text-xl">Contact</h3>
            <a className="mt-2" href="mailto:hello@toniagost.art">
              <Image
                src={Email.src}
                width={50}
                height={66}
                alt="Spinning e-mail gif"
              />
            </a>
          </div>
        </Window>
      </div>
    </>
  );
};

export default Contact;
