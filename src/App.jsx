import React from "react";
import Header from "./Header";
import Card from "./Card";
import "./index.css";
import data from "../data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Header></Header>
      <section className="main--section">{cards}</section>
    </>
  );
}

export default App;
