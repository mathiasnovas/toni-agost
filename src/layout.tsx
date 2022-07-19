import { disableBodyScroll } from "body-scroll-lock";

import { TaskBar } from "./components/task-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-secondary">
      <main className="flex-grow">{children}</main>

      <footer className="fixed bottom-0 left-0 w-full mt-auto">
        <TaskBar />
      </footer>
    </div>
  );
}
