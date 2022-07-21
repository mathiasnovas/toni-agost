import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Window } from "../components/window";
import { Button } from "../components/button";

import Heart from "../../public/images/heart.gif";
import { useState } from "react";
import classNames from "classnames";

const Booking: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<string>("booking-form");
  const [currentBookingType, setCurrentBookingType] =
    useState<string>("booking-berlin");

  const tabs = [
    {
      label: "Booking",
      slug: "booking-form",
    },
    {
      label: "Info",
      slug: "info",
    },
    {
      label: "Terms and Conditions",
      slug: "tos",
    },
  ];

  return (
    <>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Make your booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
        <Window
          title="Booking"
          actions={
            <div className="flex items-center gap-3">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTab(tab.slug)}
                  className={classNames("hover:underline cursor-pointer", {
                    underline: currentTab === tab.slug,
                  })}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          }
          icon={
            <Image
              src={Heart.src}
              layout="fill"
              objectFit="contain"
              alt="Booking icon"
            />
          }
        >
          {currentTab === "info" ? (
            <div>
              <h3 className="text-xl">How to book</h3>
              <p className="mt-2">
                Go to the{" "}
                <button
                  onClick={() => setCurrentTab("booking-form")}
                  className="text-primary underline cursor-pointer"
                >
                  booking tab
                </button>{" "}
                and fill in the form. You will be requesting an appointment
                after submitting it.{" "}
              </p>
              <h3 className="text-xl mt-6">What&apos;s next?</h3>
              <p className="mt-2">
                I evaluate your request and get back to you on the next days
                with further instructions on how to send the deposit, the exact
                price for the desired design, and the studio location. You will
                pay a 50€ deposit via PayPal or bank transfer. If you don&apos;t
                send the deposit in the next 24 hours after my response, you
                will loose your spot (if you transferred the deposit via bank
                transfer please let me know and send me a transfer confirmation
                via email). Please let me know if you decide to cancel the
                appointment and not pay the deposit. If you booked a Custom
                Design the artist will draw a new design based on your reference
                image, you can discuss with the artist if you would like to add
                any changes during your appointment.
              </p>
              <h3 className="text-xl mt-6">Pricing</h3>
              <p className="mt-2">
                The pricing scale for available designs is 150€-350€ And for
                custom designs 180€-500€. You will have to pay a 50€ deposit to
                reserve your slot, no deposit no appointment. The deposit will
                be discounted from the total price. If money is an issue we can
                always discuss your budget! If you are planning to get multiple
                designs in one session there will be discounts. Please
                don&apos;t book if you are not ready to pay the deposit. I ONLY
                work with my own handwriting (cursive or capital letters) and
                Blackletter/Gothic , I do not do other typographies. I
                don&apos;t tattoo ribs (under boob is ok depending the design).
                FLASH PREFERRED.
              </p>
              <h3 className="text-xl mt-6">Before the appointment</h3>
              <p className="mt-2">
                Make sure to eat and drink water. Bring some more water and
                sweet snacks with you ! Comfy clothes are a must ♥️ Think about
                the placement of the tattoo and wear something that makes it
                easy to reach that area.
              </p>
            </div>
          ) : null}

          {currentTab === "booking-form" ? (
            <div>
              <h3 className="text-xl">Select booking type</h3>
              <p></p>

              <div className="flex flex-col mt-2 gap-1 sm:flex-row sm:items-center sm:gap-4">
                <label
                  htmlFor="booking-berlin"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="booking-form-type"
                    id="booking-berlin"
                    className="accent-primary"
                    onChange={() => setCurrentBookingType("booking-berlin")}
                    checked={currentBookingType === "booking-berlin"}
                  />
                  <span className="ml-2">Booking Berlin</span>
                </label>

                <label
                  htmlFor="booking-guest-spot"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="booking-form-type"
                    id="booking-guest-spot"
                    className="accent-primary"
                    onChange={() => setCurrentBookingType("booking-guest-spot")}
                    checked={currentBookingType === "booking-guest-spot"}
                  />
                  <span className="ml-2">Booking Guest Spot</span>
                </label>
              </div>

              {currentBookingType === "booking-berlin" ? (
                <div className="mt-4">
                  <p>
                    This is a somewhat condensed text with information regarding
                    Berlin bookings. For more information, please check the{" "}
                    <button
                      className="text-primary underline cursor-pointer"
                      onClick={() => setCurrentTab("info")}
                    >
                      info section
                    </button>
                    .
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:gap-2 mt-4">
                    <Button
                      href="https://form.jotform.com/toniagostph/book"
                      target="_blank"
                      variant="primary"
                    >
                      Book appointment now
                    </Button>

                    <span className="text-sm">- or -</span>

                    <Button href="/contact" variant="secondary">
                      Contact me
                    </Button>
                  </div>

                  <p className="mt-2 text-sm">
                    By following the booking link above and completing the
                    booking form, you accept the{" "}
                    <button
                      className="text-primary underline cursor-pointer"
                      onClick={() => setCurrentTab("tos")}
                    >
                      terms and conditions
                    </button>
                    .
                  </p>
                </div>
              ) : null}

              {currentBookingType === "booking-guest-spot" ? (
                <div className="mt-4">
                  <p>
                    This is a somewhat condensed text with information regarding
                    booking a guest spot. For more information, please check the{" "}
                    <button
                      className="text-primary underline cursor-pointer"
                      onClick={() => setCurrentTab("info")}
                    >
                      info section
                    </button>
                    .
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {currentTab === "tos" ? (
            <div>
              Wow!!! such a cool and easy-to-understand text about terms and
              conditions!
            </div>
          ) : null}
        </Window>
      </div>
    </>
  );
};

export default Booking;
