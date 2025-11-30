import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-between">

      {/* 🔹 Top scrolling tagline */}
      <div className="w-full overflow-hidden whitespace-nowrap mt-6">
        <div className="animate-marquee text-xl md:text-3xl font-semibold text-gray-600 tracking-wide">
          CHANGE IS THE ONLY CONSTANT.&nbsp; CHANGE IS THE ONLY CONSTANT.&nbsp;
          CHANGE IS THE ONLY CONSTANT.&nbsp;
        </div>
      </div>

      {/* 🔹 Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-12">

        {/* Left Text Section */}
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            AI is the new electricity.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            ChatGPT is the lightbulb. Your work is entering a new era.
            AI’mpact guides you with a personalized AI learning roadmap
            so you can stay ahead in your role and future-proof your career.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg shadow hover:bg-blue-700 transition">
              Working Professional
            </button>

            <button className="px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 text-lg shadow hover:bg-blue-50 transition">
              Student
            </button>
          </div>
        </div>

        {/* Right Circular Visual */}
        <div className="mt-12 md:mt-0">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-blue-500 to-sky-400 shadow-xl flex items-center justify-center text-white text-2xl md:text-3xl font-semibold text-center p-6">
            AI–Human <br /> Alloy Symbol
          </div>
        </div>
      </main>

      {/* 🔹 Bottom "What is AI'mpact" Section */}
      <footer className="w-full bg-white py-10 px-6 border-t">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is AI’mpact?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            AI’mpact empowers every individual—student or working professional—
            to create meaningful impact using AI.  
            We remove fear, build awareness, and provide a curated learning path 
            that helps you grow with confidence.  
            Our mission is simple:  
            <span className="font-semibold text-gray-700">
              guide your AI journey and help you measure real progress.
            </span>
          </p>
        </div>

      </footer>
    </div>
  );
}
