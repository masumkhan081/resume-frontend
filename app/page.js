// app/page.js
"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = { name, price: parseFloat(price) };
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    if (response.ok) {
      setProducts([...products, data]);
      setName("");
      setPrice("");
    } else {
      console.error("Error adding product:", data);
    }
  };

  return (
    <div className="bg-slate-400 flex flex-col gap-6 items-center py-6">
      <div className="border border-green-600 rounded-md m-4 p-4">
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-green-600 rounded-md m-4 p-4">
        <h2>Add a New Product</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border border-green-600 rounded-md m-4 p-4"
        >
          <div className="flex gap-2">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-slate-950 text-yellow-600">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
