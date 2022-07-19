import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Window } from "../components/window";

import Heart from "../../public/images/heart.gif";

const Booking: NextPage = () => {
  return (
    <>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Making your booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
        <Window
          title="Booking"
          actions={<>Test</>}
          icon={
            <Image
              src={Heart.src}
              layout="fill"
              objectFit="contain"
              alt="Booking icon"
            />
          }
        >
          <h3 className="text-xl">How to book</h3>
          <p className="mt-2">
            Go to my{" "}
            <a
              href="https://form.jotform.com/toniagostph/book"
              className="text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              booking form
            </a>{" "}
            and fill in the form. You will be requesting an appointment after
            submitting it.{" "}
          </p>
          <h3 className="text-xl mt-6">What&apos;s next?</h3>
          <p className="mt-2">
            I evaluate your request and get back to you on the next days with
            further instructions on how to send the deposit, the exact price for
            the desired design, and the studio location. You will pay a 50€
            deposit via PayPal or bank transfer. If you don&apos;t send the
            deposit in the next 24 hours after my response, you will loose your
            spot (if you transferred the deposit via bank transfer please let me
            know and send me a transfer confirmation via email). Please let me
            know if you decide to cancel the appointment and not pay the
            deposit. If you booked a Custom Design the artist will draw a new
            design based on your reference image, you can discuss with the
            artist if you would like to add any changes during your appointment.
          </p>
          <h3 className="text-xl mt-6">Pricing</h3>
          <p className="mt-2">
            The pricing scale for available designs is 150€-350€ And for custom
            designs 180€-500€. You will have to pay a 50€ deposit to reserve
            your slot, no deposit no appointment. The deposit will be discounted
            from the total price. If money is an issue we can always discuss
            your budget! If you are planning to get multiple designs in one
            session there will be discounts. Please don&apos;t book if you are
            not ready to pay the deposit. I ONLY work with my own handwriting
            (cursive or capital letters) and Blackletter/Gothic , I do not do
            other typographies. I don&apos;t tattoo ribs (under boob is ok
            depending the design). FLASH PREFERRED.
          </p>
          <h3 className="text-xl mt-6">Before the appointment</h3>
          <p className="mt-2">
            Make sure to eat and drink water. Bring some more water and sweet
            snacks with you ! Comfy clothes are a must ♥️ Think about the
            placement of the tattoo and wear something that makes it easy to
            reach that area.
          </p>
        </Window>
      </div>
    </>
  );
};

export default Booking;
