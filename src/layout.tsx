import { TaskBar } from "./components/task-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col justify-end h-screen">
        <main>{children}</main>

        <footer>
          <TaskBar />
        </footer>
      </div>
    </div>
  );
}
