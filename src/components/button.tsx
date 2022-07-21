import classNames from "classnames";
import Link from "next/link";

type BaseProps = {
  variant?: "primary" | "secondary" | "default";
  href?: string;
  target?: string;
  width?: "auto" | "fixed" | "full";
  active?: boolean;
  iconLeft?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export type ButtonProps = BaseProps & {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

const LinkWrapper = ({
  href,
  target,
  children,
}: {
  href?: string;
  target?: string;
  children: React.ReactNode;
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a target={target}>{children}</a>
      </Link>
    );
  }

  return <>{children}</>;
};

export const Button = ({
  variant = "default",
  href,
  target = "_self",
  width = "auto",
  active = false,
  iconLeft,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "border border-t-gray-50 border-l-gray-50 border-r-gray-900 border-b-gray-900 lg:hover:border-l-gray-900 lg:hover:border-t-gray-900 lg:hover:border-r-gray-50 lg:hover:border-b-gray-50",
        {
          "bg-primary text-white": variant === "primary",
          "bg-primary-300": variant === "default",
          "bg-secondary": variant === "secondary",
          "lg:min-w-[200px]": width === "fixed",
          "min-w-none w-full": width === "full",
          "border-l-gray-900 border-t-gray-900 border-r-gray-50 border-b-gray-50":
            active,
        }
      )}
    >
      <LinkWrapper href={href} target={target}>
        <span
          className={classNames(
            "flex items-center px-3 py-1 border border-l-gray-200 border-t-gray-200  border-b-gray-400 border-r-gray-400 lg:hover:border-t-gray-400 lg:hover:border-l-gray-400 lg:hover:border-r-gray-200 lg:hover:border-b-gray-200 active:bg-primary",
            {
              "border-t-gray-400 border-l-gray-400 border-r-gray-200 border-b-gray-200":
                active,
            },
            className
          )}
        >
          {iconLeft ? (
            <span className="relative w-4 h-4 mr-2">{iconLeft}</span>
          ) : null}
          {children}
        </span>
      </LinkWrapper>
    </button>
  );
};
