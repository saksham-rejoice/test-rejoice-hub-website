import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// @ts-ignore
import { router } from "./routes";
import { ApolloProvider } from '@apollo/client/react';
import client from "./graphql/apolloClient";
import { PostHogProvider } from 'posthog-js/react'


const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
} as const


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <RouterProvider router={router} />
    </PostHogProvider>
  </ApolloProvider>
);
