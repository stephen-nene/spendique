import React from 'react'

export default function Pricings() {
  return (
<div class="font-[sans-serif] bg-gray-100 px-4 py-8">
      <div class="max-w-5xl max-lg:max-w-3xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-2 text-gray-800">Choose a Subscription</h2>
          <p class="text-sm text-gray-500">choose a plan tailored to your needs</p>
        </div>

        <div class="flex mx-auto bg-white rounded-full max-w-[300px] p-1 mt-6">
          <button class="w-full text-sm bg-purple-600 text-white py-2 px-4 tracking-wide rounded-full">
            Monthly</button>
          <button
            class="w-full text-sm bg-transparent text-gray-800 py-2 px-4 tracking-wide rounded-full">
            Yearly</button>
        </div>

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-sm:max-w-sm max-sm:mx-auto mt-12">

          <div class="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 class="text-gray-800 text-lg mb-3">Basic</h4>
            <h3 class="text-4xl font-semibold ">$4.50<sub class="text-gray-500 font-medium text-sm ml-1">/ month</sub></h3>

            <hr class="my-6 border-gray-300" />

            <div>
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  50 Image generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  500 Credits
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Monthly 100 Credits Free
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Dedicated Server
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Priority Generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  50GB Cloud Storage
                </li>
              </ul>

              <button type="button" class="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-xl">Get Started</button>
            </div>
          </div>

          <div class="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 class="text-gray-800 text-lg mb-3">Startup</h4>
            <h3 class="text-4xl font-semibold ">$14.50<sub class="text-gray-500 font-medium text-sm ml-1">/ month</sub></h3>

            <hr class="my-6 border-gray-300" />

            <div>
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  200 Image generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  1200 Credits
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Monthly 1000 Credits Free
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Dedicated Server
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Priority Generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  150GB Cloud Storage
                </li>
              </ul>
              <button type="button" class="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-xl">Get Started</button>
            </div>
          </div>

          <div class="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 class="text-gray-800 text-lg mb-3">Enterprise</h4>
            <h3 class="text-4xl font-semibold ">$24.50<sub class="text-gray-500 font-medium text-sm ml-1">/ month</sub></h3>

            <hr class="my-6 border-gray-300" />

            <div>
              <ul class="space-y-4">
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  400 Image generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  2000 Credits
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Monthly 1500 Credits Free
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Dedicated Server
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Priority Generations
                </li>
                <li class="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  500GB Cloud Storage
                </li>
              </ul>
              <button type="button" class="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-xl">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
