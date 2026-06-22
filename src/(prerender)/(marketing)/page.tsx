import { Link } from "wasp/client/router";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/about-us">Go to about us</Link>
      <Link to="/products/:productId" params={{ productId: "lemon-pie" }}>
        Go to product page
      </Link>
    </>
  );
}
