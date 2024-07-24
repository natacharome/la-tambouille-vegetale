import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-xl">Page non trouvée</p>
      <button
        className="mt-6 text-white bg-emerald-800 font-bold py-2 px-4 rounded"
        onClick={() => navigateHome()}
      >
        <p className="text-xl">Retour à l'accueil</p>
      </button>
    </div>
  );
};

export default NotFoundPage;
