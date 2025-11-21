"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
const categories = [
  { id: 1, name: "Clothing", img: "/clothing.jpg" },
  { id: 2, name: "Electronics", img: "/electronics.jpg" },
  { id: 3, name: "Accessories", img: "/accessories.jpg" },
  { id: 4, name: "Home & Living", img: "/home.jpg" },
];

const featured = [
  { id: 1, title: "Furniture", price: 49.99, img: "/furniture.jpg" },
  { id: 2, title: "Shoe", price: 29.99, img: "/shoe.jpg" },
  { id: 3, title: "Laptop", price: 99.99, img: "/laptop.jpg" },
  {
    id: 4,
    title: "Washing Machine",
    price: 299.99,
    img: "/washing%20machine.jpg",
  },
  { id: 5, title: "Headphone", price: 19.99, img: "/headphone.jpg" },
  { id: 6, title: "Refrigerator", price: 499.99, img: "/refrigerator.jpg" },
  { id: 7, title: "Smartphone", price: 1000.0, img: "/smartphone.jpg" },
];

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white rounded-full px-4 py-1 text-sm font-medium">
                New arrivals • Free shipping over $50
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                Discover modern essentials
                <br /> for everyday living
              </h1>

              <p className="text-gray-600 max-w-xl">
                Nivro brings curated products at thrifty prices. Fast shipping,
                secure checkout, and easy returns — shop with confidence.
              </p>

              <div className="flex gap-4">
                <a
                  href="#featured"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700"
                >
                  Shop Featured
                </a>

                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-gray-700 bg-white hover:bg-gray-50"
                >
                  Browse Categories
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-tr from-white to-blue-50 p-6 shadow-xl">
                <img
                  src="/shop_now.jpg"
                  alt="Hero"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-10 left-6 bg-white rounded-xl p-4 shadow-lg w-[250px]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/boy.jpg"
                    alt="mini"
                    className="w-[60px] h-[56px] rounded-md object-cover"
                  />
                  <p className=" text-sm text-gray-500">
                    Delivery all around the world
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c) => (
            <motion.div
              key={c.id}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden shadow cursor-pointer bg-white"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <div className="text-white font-semibold text-lg">{c.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="featured" className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Featured Products
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper py-6"
        >
          {featured.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl"
              >
                <div className="w-full h-[180px] overflow-hidden rounded-lg">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{p.title}</h3>
                    <div className="text-sm text-gray-500">Limited stock</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    ${p.price.toFixed(2)}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 cursor-pointer">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Deals & Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-pink-50 to-white rounded-xl p-6 shadow"
          >
            <h3 className="font-semibold text-lg">Weekly Deals</h3>
            <p className="text-gray-600 mt-2">
              Hand-picked discounts across categories.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 shadow"
          >
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Same-day dispatch on eligible items.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-cyan-50 to-white rounded-xl p-6 shadow"
          >
            <h3 className="font-semibold text-lg">Secure Payments</h3>
            <p className="text-gray-600 mt-2">
              Top payment gateways & SSL protection.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to find something great?
            </h3>
            <p className="text-blue-100 mt-1">
              Explore curated collections and exclusive deals today.
            </p>
          </div>

          <a
            href="#featured"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100"
          >
            Start Shopping
          </a>
        </div>
      </section>
    </main>
  );
}
