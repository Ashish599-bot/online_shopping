export default function Home() {
  return (
    <main className="bg-gray-100">
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nivro</h1>
        <p className="text-xl mb-6">
          Find the best products at unbeatable prices!
        </p>
        <a
          href="#"
          className="bg-white text-blue-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-200"
        >
          Shop Now
        </a>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            Clothing
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            Electronics
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            Accessories
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            Home & Living
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/furniture.jpg"
              alt="Product"
              className="mb-2 w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mb-1">Furniture</h3>
            <p className="text-blue-500 font-bold mb-2">$49.99</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/shoe.jpg"
              alt="Product"
              className="mb-2 w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mb-1">Shoe</h3>
            <p className="text-blue-500 font-bold mb-2">$29.99</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/laptop.jpg"
              alt="Product"
              className="mb-2 w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mb-1">Laptop</h3>
            <p className="text-blue-500 font-bold mb-2">$99.99</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/washing machine.jpg"
              alt="Product"
              className="mb-2 w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mb-1">Washing Machine</h3>
            <p className="text-blue-500 font-bold mb-2">$299.99</p>
          </div>
        </div>
      </section>
    </main>
  );
}
