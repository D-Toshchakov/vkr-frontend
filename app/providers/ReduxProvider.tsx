'use client';

import { Provider } from "react-redux";
import { store } from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children?: React.ReactNode;
}

const queryClient = new QueryClient()

export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  );
}