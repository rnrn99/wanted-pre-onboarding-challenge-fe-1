import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/auth/AuthPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
