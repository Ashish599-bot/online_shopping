"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  brand: string;
  price: number;
}

export default function FlipCard({ product }: { product: Product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer w-full h-[256px] perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-white rounded-xl shadow-md backface-hidden flex flex-col items-center justify-center p-4">
          <img
            src={product.img}
            className="w-[130px] h-[115px] rounded-lg object-cover"
          />
          <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
        </div>
        <div className="absolute inset-0 bg-blue-600 text-white rounded-xl shadow-md backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-lg font-bold mt-1">${product.price}</p>
          <p className="text-sm opacity-80">{product.brand}</p>
        </div>
      </div>
    </div>
  );
}
