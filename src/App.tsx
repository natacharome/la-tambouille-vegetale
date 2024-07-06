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
        <div className="App">
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
