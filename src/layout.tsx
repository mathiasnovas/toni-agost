import Image from "next/image";

import { TaskBar } from "./components/task-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-primary">
      <div className="overflow-hidden absolute z-0 h-full w-full"></div>

      <main className="flex-grow z-10 custom-bg">{children}</main>

      <footer className="fixed bottom-0 left-0 w-full mt-auto z-20">
        <TaskBar />
      </footer>
    </div>
  );
}
