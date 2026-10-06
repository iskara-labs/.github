"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Iskara Labs route error", error);
  }, [error]);

  return (
    <section className="page shell route-error" role="alert">
      <p className="section-kicker">Route recovery</p>
      <h1>This page hit a temporary rendering error.</h1>
      <p>
        The navigation shell is still available. Retry the route, or return to
        the Iskara Labs home page.
      </p>
      <div className="hero-actions">
        <button className="button button-primary" type="button" onClick={reset}>
          Retry page
        </button>
        <a className="button button-ghost" href="/">
          Back home
        </a>
      </div>
    </section>
  );
}
