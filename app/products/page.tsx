"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "T-Shirt",
    category: "clothing",
    img: "/t_shirt.jpg",
    price: 20,
  },
  {
    id: 2,
    name: "Laptop",
    category: "electronics",
    price: 1200,
    img: "/computer.jpg",
  },
  {
    id: 3,
    name: "Sunglasses",
    category: "accessories",
    price: 50,
    img: "/sunglass.jpg",
  },
  {
    id: 4,
    name: "Cushion",
    category: "home-living",
    price: 15,
    img: "/cushion.jpg",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "clothing", label: "Clothing" },
    { id: "electronics", label: "Electronics" },
    { id: "accessories", label: "Accessories" },
    { id: "home-living", label: "Home & Living" },
  ];

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4 pt-2">
        {selectedCategory ? `Products in ${selectedCategory}` : "All Products"}
      </h2>

      <div className=" flex flex-row gap-8 mb-12 pl-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-2xl shadow bg-stone-100 hover:shadow-lg"
          >
            {product.img && (
              <img
                src={product.img}
                alt={product.name}
                className="w-[125px] h-[100px] object-cover rounded-xl mb-3 mx-auto"
              />
            )}
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600 capitalize">
              Category: {product.category}
            </p>
            <p className="font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
