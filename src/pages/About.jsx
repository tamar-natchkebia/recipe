import React from "react";

export default function About() {
  return (
    <div className="bg- min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero / Intro Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#BFA38C] mb-4">
            About Gemuani
          </h1>
          <div className="w-24 h-1 bg-[#BFA38C] mx-auto rounded mb-4"></div>
          <p className="text-lg text-[#8C7561] max-w-2xl mx-auto">
            Welcome! I'm Mara, the heart behind <span className="font-semibold">Gemuani</span>. 
            I started this site to share my love for cooking and inspire you to create delicious meals at home.
          </p>
        </div>

        {/* Mission & Cooking Style Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border border-[#E6DED5]">
            <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">💡 My Mission</h2>
            <p className="text-[#8C7561] mb-3">
              At Gemuani, my goal is simple: help you enjoy cooking without stress. 
              From quick weeknight dinners to indulgent desserts, I provide recipes that are easy, fun, and full of flavor.
            </p>
            <p className="text-[#8C7561]">
              I believe that cooking should be creative, joyful, and accessible to everyone—no fancy gadgets required!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border border-[#E6DED5]">
            <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">🍴 My Cooking Style</h2>
            <ul className="list-disc list-inside text-[#8C7561] space-y-2">
              <li>Quick and easy weeknight meals</li>
              <li>Comfort food with a modern twist</li>
              <li>Fresh and seasonal ingredients</li>
              <li>Sweet treats and desserts</li>
            </ul>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition border border-[#E6DED5]">
          <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">🌟 A Little About Me</h2>
          <p className="text-[#8C7561]">
            Fun fact: My favorite ingredient is garlic, and I never say no to chocolate! 
            I love experimenting with flavors and sharing the results here for you to enjoy.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-[#8C7561] mb-6 text-lg">
            Ready to cook something delicious? Check out my latest recipes!
          </p>
          <a
            href="/recipes"
            className="bg-[#BFA38C] text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
          >
            Explore Recipes
          </a>
        </div>

      </div>
    </div>
  );
}
