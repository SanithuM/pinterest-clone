import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ImageGrid from "../components/ImageGrid";
import { useState } from "react";

function Home() {
  const [selected, setSelected] = useState("All");

  return (
    <div>
      <Navbar />
      <Categories selected={selected} setSelected={setSelected} />
      <div className="p-4">
        <ImageGrid selected={selected} />
      </div>
    </div>
  );
}

export default Home;
