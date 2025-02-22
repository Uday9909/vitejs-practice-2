import React from "react";
import "./App.css";
import Productcard from "./cart/productcard.jsx";

function App() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {cards.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
}

export default App;
