"use client";
import client from "@/services/client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
