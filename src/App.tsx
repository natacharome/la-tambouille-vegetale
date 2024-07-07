import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/Recipe";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Recipes from "./pages/Recipes";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex justify-center items-center">
          <main className="w-10/12 pt-20">
            <Routes>
              <Route path="/" element={<Recipes />} />
              <Route path="/recipe/:id" element={<RecipePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
