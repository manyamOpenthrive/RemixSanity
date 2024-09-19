import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { LinksFunction } from "@remix-run/node";
const LiveVisualEditing = lazy(() => import("../app/components/LiveVisualEditing"));

export const loader = () => {
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
    },
  });
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com?plugins=typography" />
      </head>
      <body className="bg-white">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        {ENV.SANITY_STUDIO_STEGA_ENABLED ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LiveVisualEditing />
          </Suspense>
        ) : null}
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];