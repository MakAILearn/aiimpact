import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-10">
      {/* Banner */}
      <div className="text-xs uppercase tracking-wide text-slate-600 mb-6">
        Change is the only constant.
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            AI is the new electricity.
          </h1>

          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            ChatGPT is the lightbulb. Your work is entering a new era.
            We guide you through it with a personalized roadmap built for your role.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 transition">
              Get Your AI Roadmap
            </button>

            <button className="px-6 py-3 bg-white border border-slate-300 rounded-xl shadow-sm hover:bg-slate-100 transition">
              Log In
            </button>
          </div>
        </div>

        {/* Right: Hero Symbol Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 shadow-xl flex items-center justify-center">
            <div className="text-white text-center px-6 text-xl font-semibold">
              AI–Human
              <br />
              Alloy Symbol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
