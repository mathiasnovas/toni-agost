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
            <div className="overflow-scroll w-full max-w-[700px] max-h-[calc(100vh_-_150px)] md:max-h-[50vh] p-3 bg-white">
              {children}
            </div>
          </BorderBox>
        </div>
      </div>
    </BorderBox>
  );
}
