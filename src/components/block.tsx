import classNames from "classnames";

export const Block = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "p-2 bg-primary border border-t-gray-50 border-l-gray-50 border-r-gray-900 border-b-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
};
