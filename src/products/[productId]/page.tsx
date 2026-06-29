import { useParams } from "react-router";
import { Link } from "wasp/client/router";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <>
      <h1>Page for {productId}</h1>
      <Link to="/">Back</Link>
    </>
  );
}
