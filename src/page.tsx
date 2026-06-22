import { Link } from "wasp/client/router";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/about-us">Go to about us</Link>
    </>
  );
}
