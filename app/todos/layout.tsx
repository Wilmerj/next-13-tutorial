import NewTodoForm from "@/app/components/NewTodoForm";
import TodoList from "@/app/components/TodoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section lang="en">
    <h1>Dashboard</h1>
    <NewTodoForm />
    {children}
  </section>;
}
