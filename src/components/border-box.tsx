import classNames from "classnames";

export function BorderBox({
  state = "out",
  children,
}: {
  state?: "in" | "out";
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames("border", {
        "border-l-gray-50 border-t-gray-50 border-r-gray-900 border-b-gray-900":
          state === "out",
        "border-l-gray-900 border-t-gray-900 border-r-gray-50 border-b-gray-50":
          state === "in",
      })}
    >
      <div
        className={classNames("border", {
          "border-l-gray-200 border-t-gray-200 border-r-gray-400 border-b-gray-400":
            state === "out",
          "border-l-gray-400 border-t-gray-400 border-r-gray-200 border-b-gray-200":
            state === "in",
        })}
      >
        {children}
      </div>
    </div>
  );
}
