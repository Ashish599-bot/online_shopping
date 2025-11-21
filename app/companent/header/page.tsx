export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <img src="/logo.jpg" alt="logo" className="h-[120px]" />

      <nav className="flex items-center space-x-4">
        <a href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </a>
        <a href="/products" className="text-gray-700 hover:text-blue-500">
          Products
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Deals
        </a>
        <a href="/log" className="text-gray-700 hover:text-blue-500">
          Login
        </a>
        <a href="#" className="relative">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path>
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </a>
      </nav>
    </header>
  );
}
