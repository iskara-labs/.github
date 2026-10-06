import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page shell not-found">
      <p className="section-kicker">404</p>
      <h1>This route is not part of the portfolio.</h1>
      <p>Return to the Iskara Labs company site.</p>
      <Link className="button button-primary" href="/">Back home</Link>
    </section>
  );
}
