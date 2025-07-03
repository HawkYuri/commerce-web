import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Produto</h2>
      <p>ID: {id}</p>
    </div>
  );
}
