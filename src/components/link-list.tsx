import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

import { ArrowRight } from "./icons";

export type LinkListItem = {
  label: string;
  route: string;
  icon?: string;
};

export const LinkList = ({
  items,
  onClick,
}: {
  items: LinkListItem[];
  onClick: any;
}) => {
  const { route } = useRouter();

  return (
    <div className="flex flex-col bg-primary-300 border border-t-gray-50 border-l-gray-50 border-r-gray-900 border-b-gray-900">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => onClick(item)}
          className={classNames(
            "group flex items-center px-6 py-3 border border-t-gray-200 border-l-gray-200 border-r-gray-400 border-b-gray-400 hover:bg-primary hover:text-white",
            {
              "bg-primary text-white underline": route === item.route,
            }
          )}
        >
          {item.icon ? (
            <span className="mr-2 relative w-7 h-7">
              <Image
                src={item.icon}
                alt="Heart icon"
                width={7}
                height={7}
                layout="fill"
                objectFit="contain"
              />
            </span>
          ) : null}

          <span>{item.label}</span>

          <span className="ml-auto opacity-0 group-hover:opacity-100">
            <ArrowRight size={3} />
          </span>
        </button>
      ))}
    </div>
  );
};
