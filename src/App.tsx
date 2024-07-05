import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import RecipePage from './pages/Recipe';
import './App.css';

const App: React.FC = () => {
  // TEMP DATA
  const recipes = [
    { img: 'https://images.unsplash.com/photo-1532768641073-503a250f9754?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Recipe 1', data: "This is recipe 1" },
    { img: 'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Recipe 2', data: "This is recipe 2" },
    { img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2FufGVufDB8fDB8fHww', title: 'Recipe 3', data: "This is recipe 3" }
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="cards">
              {recipes.map((recipe, index) => (
                <Card key={index} img={recipe.img} title={recipe.title} data={recipe.data} />
              ))}              
            </div>
          } />
          <Route path="/recipe/:title" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
