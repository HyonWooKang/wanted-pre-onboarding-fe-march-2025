import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section>
        <div>
          <h3>Pre-on-Boarding for Fronted by Wanted</h3>
        </div>
        <div></div>
      </section>
      <section>
        <div>javascript</div>
        <div>
          <ol>
            <Link to="/javascript/Symbol">
              <li>Symbol</li>
            </Link>
          </ol>
        </div>
      </section>
    </>
  );
}
