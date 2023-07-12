import type { NextPage } from "next";
import Image from "next/image";

import { Window } from "../components/window";
import { Button } from "../components/button";
import { SEO } from "../components/seo";

import Heart from "../../public/images/heart.gif";
import { useState } from "react";
import classNames from "classnames";
import {
  CUSTOM_PRICE,
  DEFAULT_PRICE_RANGE,
  DEPOSIT_AMOUT,
} from "../helpers/data";
import Link from "next/link";

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
      <SEO title="Booking" description="Book a tattoo apointment today" />

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
                pay a {DEPOSIT_AMOUT}€ deposit via PayPal or bank transfer. If
                you don&apos;t send the deposit in the next 24 hours after my
                response, you will loose your spot (if you transferred the
                deposit via bank transfer please let me know and send me a
                transfer confirmation via email). Please let me know if you
                decide to cancel the appointment and not pay the deposit. If you
                booked a Custom Design the artist will draw a new design based
                on your reference image, you can discuss with the artist if you
                would like to add any changes during your appointment.
              </p>
              <h3 className="text-xl mt-6">Pricing</h3>
              <p className="mt-2">
                The pricing scale for available designs is{" "}
                {`${DEFAULT_PRICE_RANGE[0]}€-${DEFAULT_PRICE_RANGE[1]}€`}.
                Custom designs start at {CUSTOM_PRICE}€. You will have to pay a{" "}
                {DEPOSIT_AMOUT}€ deposit to reserve your slot. No deposit, no
                appointment. The deposit will be discounted from the total
                price. If money is an issue we can always discuss your budget!
                If you are planning to get multiple designs in one session there
                will be discounts. Please don&apos;t book if you are not ready
                to pay the deposit. I ONLY work with my own handwriting (cursive
                or capital letters) and Blackletter/Gothic. I do not do other
                typographies. I don&apos;t tattoo ribs (under boob is ok
                depending the design). FLASH PREFERRED.
              </p>
              <h3 className="text-xl mt-6">Before the appointment</h3>
              <p className="mt-2">
                Make sure to eat and drink water. Bring some more water and
                sweet snacks with you! Comfy clothes are a must ♥️ Think about
                the placement of the tattoo and wear something that makes it
                easy to reach that area.
              </p>
              <h3 className="text-xl mt-6">Booking a guest spot</h3>
              <p className="mt-4">
                Since there is usually very limited slots available for guest
                spots, I will usually open a waitlist first that will give you
                booking priority. If you want to be a part of a waitlist you can
                contact me and then I will contact you before bookings open to
                give you an appointment.
              </p>
              <p className="mt-4">
                Once bookings open anyone can book through the{" "}
                <Link href="https://form.jotform.com/toniagostph/waitlist">
                  <a className="text-primary underline" target="_blank">
                    booking form
                  </a>
                </Link>
                . A deposit of 50% of the total price is necessary to be paid
                24hs after making the appointment. You can pay via PayPal. The
                rest of the price will be paid at the appointment via PayPal or
                Cash.
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
                  <span className="ml-2">Guest Spot Waitlist</span>
                </label>
              </div>

              {currentBookingType === "booking-berlin" ? (
                <div className="mt-4">
                  <p>
                    Book an appointment now or contact me if you have any
                    questions regarding the process. You can also check out the{" "}
                    <button
                      className="text-primary underline cursor-pointer"
                      onClick={() => setCurrentTab("info")}
                    >
                      info section
                    </button>{" "}
                    for more information.
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
                    Book a guest spot now or contact me if you have any
                    questions regarding the process. For more information,
                    please check the{" "}
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
                      href="https://form.jotform.com/toniagostph/waitlist"
                      target="_blank"
                      variant="primary"
                    >
                      Guest Spot Waitlist
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
            </div>
          ) : null}

          {currentTab === "tos" ? (
            <div>
              <h3 className="text-xl">
                Terms and conditions &amp; Cancellation Policy
              </h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li>
                  A minimum {DEPOSIT_AMOUT}€ deposit is required in advance to
                  book a tattoo appointment, you will have to send it 24hs after
                  you recieve my email confirmation about your booking request.
                  A deposit is required for each appointment. The deposit is
                  payable via Bank Transfer or Paypal. The deposit is
                  refundable, check Cancellation Policy.
                </li>

                <li>
                  Once a deposit has been received, your appointment is
                  confirmed.Please book your tattoo appointment on a day where
                  you have no set plans after your appointment. Give yourself
                  plenty of time and do not rush the artist.
                </li>

                <li>
                  Please do not come to your tattoo appointment if you are
                  feeling unwell. Just give us as much notice as you can, at
                  least 2 hours before your appointment. Bear in mind that you
                  may still be contagious even if you feel you&apos;ve recovered
                  from symptoms. If you&apos;ve been suffering from a cold, flu,
                  a cough, temperature, or a sickness bug for example and have
                  started to feel better, please don&apos;t come in.
                </li>

                <li>
                  If you are more than 20 mins late for your appointment, please
                  let me know and we can reschedule your appointment. I
                  won&apos;t have enough time to tattoo you if you are this
                  late. I reserve the right not to tattoo you if you arrive
                  leaving insufficient time for me to complete the tattoo.{" "}
                </li>

                <li>
                  Custom drawings/tattoo designs are not available until the day
                  of your appointment. There is always time on the day to
                  discuss your design and ask for small changes.
                </li>

                <li>
                  Avoid drinking alcohol, and energy drinks such as Red Bull 24
                  hours prior to your appointment. Make sure you have eaten
                  properly prior to your appointment and bring snacks or food
                  with you.
                </li>

                <li>
                  If you are under the influence of alcohol or drugs, I cannot
                  tattoo you. You will be asked to leave and your deposit will
                  not be refunded.
                </li>

                <li>
                  On the day of your appointment, a consent form will be
                  provided for you to fill out. You&apos;ll be expected to
                  disclose information about health conditions and medications.
                </li>

                <li>
                  I cannot tattoo you if you are pregnant or if you are
                  breastfeeding.
                </li>

                <li>I do not undertake offensive / racist tattoos.</li>

                <li>
                  It is your responsibility to care for your new tattoo and
                  follow the artist&apos;s aftercare advice. I will provide you
                  with aftercare instructions after our appointment.
                </li>
              </ul>
              <h3 className="mt-6 text-xl">Cancellation Policy</h3>
              <p className="mt-2">
                A minimum {DEPOSIT_AMOUT}€ deposit is required in advance to
                book a tattoo appointment, you will have to send it 24hs after
                you receive my email confirmation about your booking request. A
                deposit is required for each appointment. The deposit is payable
                via Bank Transfer or Paypal.
              </p>

              <p className="mt-2">
                The deposit is refundable in case of cancellation prior the 7
                days before the appointment. If you would like to rearrange your
                appointment I ask for a minimum of 7 days notice. Failing to
                notify me within the minimum 7 days notice will result in losing
                your deposit.
              </p>

              <p className="mt-2">
                If you cancel because you are ill or recovering from illness,
                you will have 30 days in which you can reschedule your
                appointment. Your deposit will be carried over to the new
                appointment. If you are ill a second time and give less than 7
                days notice prior to your second appointment, the deposit will
                then become non-refundable.If for any reason (illness, etc) I
                need to cancel our appointment last minute, the option of a
                deposit refund is possible. You can also choose to reschedule
                your appointment.
              </p>
            </div>
          ) : null}
        </Window>
      </div>
    </>
  );
};

export default Booking;
