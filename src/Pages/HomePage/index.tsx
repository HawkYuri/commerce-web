import { Link } from "react-router-dom";
import { paths } from "@/Router/paths";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to={paths.product(123)}>Ver Produto 123</Link>
    </div>
  );
}
