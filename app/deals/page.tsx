"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  brand: string;
  price: number;
}

function FlipCard({ product }: { product: Product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer w-full h-[256px] perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-white rounded-xl shadow-md backface-hidden flex flex-col items-center justify-center p-4">
          <div className="w-[130px] h-[115px] overflow-hidden rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
          <p className=" text-sm text-gray-500 mt-2">
            Flip to see more details
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl shadow-md backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-sm mb-2">Special Deal!</p>
          <p className="text-lg font-bold mb-2">{product.brand}</p>
          <p className="text-lg font-bold mb-2">{product.price}</p>
          <p className="text-xs opacity-80 mt-2">Tap again to flip back</p>
        </div>
      </div>
    </div>
  );
}

const DEALS: Product[] = [
  { id: 1, name: "T-Shirt", img: "/t_shirt.jpg", brand: "Nike", price: 20.99 },
  {
    id: 2,
    name: "Laptop",
    img: "/computer.jpg",
    brand: "Apple",
    price: 199.99,
  },
  {
    id: 3,
    name: "Sunglasses",
    img: "/sunglass.jpg",
    brand: "Ray-Ban",
    price: 10.99,
  },
  {
    id: 4,
    name: "Cushion",
    img: "/cushion.jpg",
    brand: "Ikea",
    price: 5.99,
  },
];

export default function DealsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Deals of Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DEALS.map((product) => (
          <FlipCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
