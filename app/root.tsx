import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ApolloProvider } from "@apollo/client/react";
import client from "./graphql/apolloClient";

import type { Route } from "./+types/root";
import "./app.css";
import ErrorFallback from "./components/ui/ErrorFallback";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },
];

export const meta: Route.MetaFunction = () => [
  // { charSet: "utf-8" },
  // { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "dmsans", content: "index,follow" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://sites-analytics.rejoicehub.com/api/script.js"
          data-site-id="1"
          defer
        ></script>
        <script
          id="gtag"
          src="https://www.googletagmanager.com/gtag/js?id=G-D67P6NYTPG"
          async
        />

        <script
          id="googleTagManager"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-D67P6NYTPG');`,
          }}
        />

        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: `{
              "prerender": [{ "where": { "href_matches": "/*" }, "eagerness": "moderate" }],
              "prefetch": [{ "where": { "href_matches": "/*" }, "eagerness": "moderate" }]
            }`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_OZlufih4rM5ImkgQhF9PTVsPYfhKiTSnlyp6Pf7ZS95',{api_host:'https://us.i.posthog.com', defaults:'2025-05-24'})`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {/* <script src="https://cdn.jsdelivr.net/gh/rejoicehub/voice_ai_agent@main/index.js" call-intel-id="agent_01jz81x78pezzsbexr67b1qxd4"></script> */}
      </body>
    </html>
  );
}

export default function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdn.jsdelivr.net/gh/rejoicehub/voice_ai_agent@main/index.js";
  //   script.defer = true;
  //   script.setAttribute("call-intel-id", "agent_01jz81x78pezzsbexr67b1qxd4");
  //   document.body.appendChild(script);

  //   return () => {
  //     script.remove();
  //   };
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status: string | number = "Error";
  let message = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || message;
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <ErrorFallback status={status} message={message} />
      {stack && (
        <pre className="w-full p-4 overflow-x-auto mt-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
