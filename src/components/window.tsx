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
  const [windowHeight, setWindowHeight] = useState<number>();
  const maxHeightClass = classNames(`max-h-\[${windowHeight}px\]`);

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window != undefined) {
      windowRef.current!.style.maxHeight = `${
        window.innerHeight - windowOffset
      }px`;
    }
  }, [windowRef, windowHeight]);

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
                "overflow-y-scroll w-full max-w-[700px] p-3 bg-white"
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
