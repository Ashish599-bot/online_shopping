export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">Nivro</h3>
          <p>
            Best online store for trendy products delivered fast to your door.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Email: nivro2016@gmail.com</p>
          <p>Phone: +954 17 56 78 90</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Tiktok
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        © 2025 ShopNova. All rights reserved.
      </div>
    </footer>
  );
}
