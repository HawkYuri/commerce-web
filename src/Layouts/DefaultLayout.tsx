import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <h1>Ecommerce</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025</p>
      </footer>
    </div>
  );
}
