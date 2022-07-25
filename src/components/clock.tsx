import { useEffect, useState } from "react";
import Image from "next/image";

import Sun from "../../public/images/sun_ani.gif";

export const Clock = () => {
  const [timeString, setTimeString] = useState<string>();

  useEffect(() => {
    const clock = setInterval(() => {
      setTimeString(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="flex px-2 py-1 h-ful bg-primary-500 border border-b-gray-50 border-r-gray-50 border-t-gray-400 border-l-gray-400">
      <figure className="relative w-6 h-6 mr-2">
        <Image
          src={Sun.src}
          layout="fill"
          objectFit="contain"
          alt="Booking icon"
        />{" "}
      </figure>
      {timeString}
    </div>
  );
};
