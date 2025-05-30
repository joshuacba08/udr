import { QueryClient } from "@tanstack/react-query";

// Create the query client with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time before data is considered stale
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Time before inactive queries are removed from cache
      gcTime: 1000 * 60 * 10, // 10 minutes (previously called cacheTime)
      // Number of retry attempts on failure
      retry: 1,
      // Retry delay
      retryDelay: 1000,
      // Refetch on window focus
      refetchOnWindowFocus: false,
      // Refetch on reconnect
      refetchOnReconnect: true,
    },
    mutations: {
      // Number of retry attempts on failure for mutations
      retry: 0,
    },
  },
});

export default queryClient;
