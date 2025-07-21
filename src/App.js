import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

const allbrands = [
  { id: 1, name: "puma" },
  { id: 2, name: "zara" },
  { id: 3, name: "armani" },
  { id: 4, name: "gucci" },
  { id: 5, name: "dior" },
];

function App() {
  const [brand, setBrand] = useState(allbrands);

  const onsearch = (event) => {
    const filteredbrands = allbrands.filter((brand) =>
      brand.name.includes(event.target.value.toLowerCase())
    );
    setBrand(filteredbrands);
  };

  return (
    <>
      <input onChange={onsearch} placeholder="search here........"></input>
      <ul>
        {brand.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
