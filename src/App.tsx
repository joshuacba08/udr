import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainLayout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
