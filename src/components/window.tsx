import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { BorderBox } from "./border-box";

export function Window({
  title,
  icon,
  actions,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  const windowOffset = 150;
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      if (window != undefined) {
        const newHeight =
          window.innerWidth < 768
            ? `${window.innerHeight - windowOffset}px`
            : `40vh`;

        windowRef.current!.style.maxHeight = newHeight;
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowRef]);

  return (
    <BorderBox>
      <div className="bg-primary-300">
        <div className="flex items-center py-1 px-2 bg-primary-500 select-none">
          <div className="relative w-4 h-4 mr-2">{icon}</div>
          <div>{title}</div>
        </div>

        {actions ? (
          <div className="py-1 px-2 select-none">{actions}</div>
        ) : null}

        <div className="p-1">
          <BorderBox state="in">
            <div
              ref={windowRef}
              className={classNames(
                "overflow-y-scroll w-full max-w-[700px] max-h-[40vh] p-3 bg-white"
              )}
            >
              {children}
            </div>
          </BorderBox>
        </div>
      </div>
    </BorderBox>
  );
}
