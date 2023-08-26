"use client";

import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { makeServer } from "../mocks/server"
if (process.env.NODE_ENV in ["mock"]) {
  makeServer()
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
  );
}