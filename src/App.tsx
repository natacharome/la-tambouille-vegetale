import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/Recipe";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Recipes from "./pages/Recipes";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col justify-center items-center">
          <main className="w-10/12 py-20">
            <Routes>
              <Route path="/" element={<Recipes />} />
              <Route path="/recipe/:id" element={<RecipePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
