import { Header } from "@/Components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025</p>
      </footer>
    </div>
  );
}
