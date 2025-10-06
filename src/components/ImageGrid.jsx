import React from "react";
import ImageCard from "./ImageCard";

const wallpapers = {
  Nature: [
    "https://i.pinimg.com/736x/4f/2b/3c/4f2b3ce181439f7ca20d47310fcc40a9.jpg",
    "https://i.pinimg.com/236x/54/51/2a/54512a6a5e54483f2a6d17294d347d53.jpg",
    "https://i.pinimg.com/736x/97/87/70/978770838c4b81c60757396e97fee063.jpg",
  ],
  Cars: [
    "https://i.pinimg.com/736x/45/94/40/45944047ff1438abcd17697d53e4368d.jpg",
    "https://i.pinimg.com/736x/3a/1c/46/3a1c46994b364b7c56fd030e761f663e.jpg",
    "https://i.pinimg.com/736x/00/c1/c0/00c1c001455f45bf52dc3cdc70d85c91.jpg",
  ],
  Animals: [
    "https://i.pinimg.com/736x/f9/45/45/f94545c55250eb9ad2ab412195853dbd.jpg",
    "https://i.pinimg.com/236x/82/56/32/8256324f26d68b00563f301052207e88.jpg",
    "https://i.pinimg.com/736x/8d/3e/8f/8d3e8f0244f72e66af40bfc431adef56.jpg",
  ],
  Art: [
    "https://i.pinimg.com/736x/96/32/a3/9632a3abf6d7a99b44188510a20a254f.jpg",
    "https://i.pinimg.com/474x/71/ff/90/71ff906da524315efb4761921f5bd63f.jpg",
    "https://i.pinimg.com/736x/8d/59/9e/8d599eb993d6a6478f23318722826cfd.jpg",
  ],
  Anime: [
    "https://i.pinimg.com/236x/b4/80/f3/b480f3a398395421cd6f195dfd7760bb.jpg",
    "https://i.pinimg.com/236x/56/48/3e/56483eb04a6863745961d83ac8bfb059.jpg",
    "https://i.pinimg.com/236x/ff/8a/08/ff8a0887a9894fd4567c89cf57244254.jpg",
    "https://i.pinimg.com/736x/bd/7c/ed/bd7ced4f7def2821446477c22d08006b.jpg",
    "https://i.pinimg.com/236x/17/75/39/17753995c25040b8ded7d4d29286e2e8.jpg",
    "https://i.pinimg.com/236x/5e/af/9d/5eaf9dccbf9c6373e9bb60d142f518a2.jpg",

  ],
  Food: [
    "https://i.pinimg.com/474x/da/28/60/da28606faa08b8146fa4f6744f5b50b9.jpg",
    "https://i.pinimg.com/736x/ad/9d/17/ad9d179d29a1c33978878e544f5f9b1f.jpg",
    "https://i.pinimg.com/736x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg",
  ],
  Travel: [
    "https://i.pinimg.com/736x/84/7a/eb/847aeb3a3b68038112dc73f68855dc69.jpg",
    "https://i.pinimg.com/736x/46/39/f7/4639f7e4ebb61cfebda536758ddc6aeb.jpg",
    "https://i.pinimg.com/736x/00/d4/81/00d4814330c49bef2cc938343906df83.jpg",
  ],
  Fashion: [
    "https://i.pinimg.com/736x/4f/a0/c3/4fa0c395efd7db0a3eac7792d348e002.jpg",
    "https://i.pinimg.com/736x/a9/ba/e2/a9bae2c13b2ee8125fb4224b7fbaebd5.jpg",
    "https://i.pinimg.com/736x/05/0c/53/050c53e663c716057907e98f2ca653af.jpg",
  ],
};

// Helper function to shuffle an array
function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function ImageGrid({ selected }) {
  let images = [];

  if (selected === "All") {
    // Flatten all images and shuffle them
    images = shuffleArray(Object.values(wallpapers).flat());
  } else {
    images = wallpapers[selected] || [];
  }

  return (
    <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
      {images.map((url, idx) => (
        <ImageCard key={idx} url={url} />
      ))}
    </div>
  );
}

export default ImageGrid;
