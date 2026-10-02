import React from "react";

function Categories({ selected, setSelected }) {
  const categories = ["All", "Nature", "Cars", "Anime", "Art", "Food", "Travel", "Fashion", "Animals"];

  return (
    <div className="flex gap-3 px-6 py-3 overflow-x-auto bg-white sticky top-[64px] z-40">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${
            selected === cat
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
