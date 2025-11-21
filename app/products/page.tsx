"use client";

import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "T-Shirt", category: "clothing", price: 20 },
  { id: 2, name: "Laptop", category: "electronics", price: 1200 },
  { id: 3, name: "Sunglasses", category: "accessories", price: 50 },
  { id: 4, name: "Cushion", category: "home-living", price: 15 },
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
      <h2 className="text-2xl font-semibold mb-4">
        {selectedCategory ? `Products in ${selectedCategory}` : "All Products"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-2xl shadow bg-white hover:shadow-lg"
          >
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
