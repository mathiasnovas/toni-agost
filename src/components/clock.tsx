import { useEffect, useState } from "react";

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
    <div className="px-2 py-1 h-ful bg-primary-500 border border-b-gray-50 border-r-gray-50 border-t-gray-400 border-l-gray-400">
      {"[icon]"} {timeString}
    </div>
  );
};
