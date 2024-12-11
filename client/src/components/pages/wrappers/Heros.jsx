import React from "react";

export default function Heros() {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4">
          Take Control of Your Finances
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Track your daily expenses and income effortlessly. Gain insights
            into your spending habits and make informed decisions to achieve
            your financial goals.
          </p>
          <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a
              href="#services"
              className="px-6 py-3 text-base font-semibold text-white bg-sky-500 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-sky-500 focus:outline-none focus:ring-opacity-50"
            >
              Explore Our Services
            </a>
            <a
              href="javascript:void(0);"
              className="px-6 py-3 text-base font-semibold text-sky-600 border border-sky-500 rounded-full hover:text-white hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
            >
              Start Now
            </a>
          </div>
        </div>
        <div className="md:h-[450px]">
          <img
            src="https://files.oaiusercontent.com/file-7GdbZLjYKf5EA98725R8zM?se=2024-12-11T08%3A20%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1a7ee7a2-7132-43ef-be7b-778ea090aba7.webp&sig=p/WY/Y2jtuaIMGKJVg0rdcXX%2BSItUP1E6ewJCE3iLmo%3D"
            className="w-full h-full object-contain rounded-lg"
            alt="Dining Experience"
          />
        </div>
      </div>
    </>
  );
}
