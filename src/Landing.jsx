// src/Landing.jsx
import React, { useRef, useState } from "react";

export default function Landing() {
  const onboardingRef = useRef(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Onboarding form state
  const [role, setRole] = useState("leader");
  const [maturity, setMaturity] = useState("exploring");
  const [goal, setGoal] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  function scrollToOnboarding() {
    if (onboardingRef.current) {
      onboardingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function openLogin() {
    setLoginOpen(true);
  }
  function closeLogin() {
    setLoginOpen(false);
  }

  function computeRecommendation({ role, maturity, goal }) {
    // Simple rule-based recommender for demo purposes.
    // You can replace with real logic or backend call later.
    if (maturity === "exploring") return "AWARE";
    if (maturity === "piloting") return "ADOPT";
    if (maturity === "scaling") return "ASCEND";

    // fallback: analyze goal keywords
    const g = (goal || "").toLowerCase();
    if (g.includes("pilot") || g.includes("proof")) return "ADOPT";
    if (g.includes("scale") || g.includes("platform")) return "ASCEND";
    return "AWARE";
  }

  async function handleOnboardingSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // compute recommendation quickly (could call API here)
    const rec = computeRecommendation({ role, maturity, goal });
    setTimeout(() => {
      setRecommendation(rec);
      setSubmitting(false);
      // scroll to result (slightly below form)
      if (onboardingRef.current) {
        onboardingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 450);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-600 mb-6">
            Change is the only constant.
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            AI is the new electricity.
          </h1>

          <p className="text-lg text-slate-600 mt-4 leading-relaxed max-w-xl">
            ChatGPT is the lightbulb. Your work is entering a new era. We guide you through it
            with a personalized roadmap built for your role.
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <button
              onClick={scrollToOnboarding}
              className="px-6 py-3 bg-sky-600 text-white rounded-2xl shadow hover:bg-sky-700 transition"
              aria-label="Get your AI roadmap"
            >
              Get Your AI Roadmap
            </button>

            <button
              onClick={openLogin}
              className="px-6 py-3 bg-white border border-slate-300 rounded-2xl shadow-sm hover:bg-slate-100 transition"
              aria-label="Log in"
            >
              Log In
            </button>
          </div>
        </div>

        {/* Right visual */}
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

      {/* --- Three Pillars — keep here if you already added separate component, else skip --- */}
      {/* (If you added ThreePillars as a separate component, you can import and render it here) */}

      {/* ONBOARDING SECTION */}
      <section
        ref={onboardingRef}
        id="onboarding"
        className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md mb-20"
        aria-labelledby="onboarding-heading"
      >
        <h2 id="onboarding-heading" className="text-2xl font-bold text-slate-900 mb-3">
          Quick AI Readiness Diagnostic
        </h2>
        <p className="text-slate-600 mb-6">
          This quick 1-minute form will surface which part of the AWARE → ADOPT → ASCEND model
          is right for you today.
        </p>

        <form onSubmit={handleOnboardingSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-slate-600 mb-1">Your role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-3 py-2 border rounded-lg"
                aria-label="Your role"
              >
                <option value="leader">Leader / Executive</option>
                <option value="pm">Product / Program</option>
                <option value="engineer">Engineer</option>
                <option value="data">Data / ML</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-600 mb-1">Current AI maturity</span>
              <select
                value={maturity}
                onChange={(e) => setMaturity(e.target.value)}
                className="px-3 py-2 border rounded-lg"
                aria-label="AI maturity"
              >
                <option value="exploring">Exploring</option>
                <option value="piloting">Piloting</option>
                <option value="scaling">Scaling</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-600 mb-1">Top goal (brief)</span>
              <input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="px-3 py-2 border rounded-lg"
                placeholder="Example: pilot automation for billing"
                aria-label="Top goal"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700"
              aria-label="Submit onboarding"
              disabled={submitting}
            >
              {submitting ? "Analyzing…" : "Get my recommended path"}
            </button>

            <button
              type="button"
              onClick={() => {
                setRole("leader");
                setMaturity("exploring");
                setGoal("");
                setRecommendation(null);
              }}
              className="px-4 py-2 bg-white border rounded-lg"
            >
              Reset
            </button>
          </div>
        </form>

        {/* RESULT */}
        <div className="mt-8">
          {recommendation ? (
            <div className="p-6 bg-slate-50 rounded-lg border">
              <h3 className="text-lg font-semibold">Recommended starting point</h3>
              <p className="mt-2 text-slate-700">
                Based on your inputs, we recommend starting with{" "}
                <strong className="uppercase">{recommendation}</strong>.
              </p>

              {recommendation === "AWARE" && (
                <div className="mt-3 text-slate-600">
                  Focus: Opportunity discovery, stakeholder alignment, and quick assessments.
                </div>
              )}
              {recommendation === "ADOPT" && (
                <div className="mt-3 text-slate-600">
                  Focus: Pilot design, measurable KPIs, and integration into workflows.
                </div>
              )}
              {recommendation === "ASCEND" && (
                <div className="mt-3 text-slate-600">
                  Focus: Platform, governance, operating model and scaling operations.
                </div>
              )}

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // In future: hook into booking / contact flow
                    alert("Thanks — we'll follow up with a custom roadmap (demo).");
                  }}
                  className="px-4 py-2 bg-sky-600 text-white rounded-lg"
                >
                  Request a short roadmap
                </a>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // For now, show onboarding again or route
                    scrollToOnboarding();
                  }}
                  className="px-4 py-2 border rounded-lg"
                >
                  Re-run diagnostic
                </a>
              </div>
            </div>
          ) : (
            <div className="text-slate-500">No recommendation yet — submit the form to get one.</div>
          )}
        </div>
      </section>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closeLogin}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-semibold mb-2">Log in</h3>
            <p className="text-sm text-slate-600 mb-4">This is a demo modal. Hook real auth later.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // demo flow: close modal and show an alert
                closeLogin();
                alert("Logged in (demo). You can wire real auth later.");
              }}
              className="space-y-3"
            >
              <label className="flex flex-col">
                <span className="text-sm text-slate-600">Email</span>
                <input type="email" required className="mt-1 px-3 py-2 border rounded-lg" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-600">Password</span>
                <input type="password" required className="mt-1 px-3 py-2 border rounded-lg" />
              </label>

              <div className="flex justify-end gap-2">
                <button type="button" onClick={closeLogin} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-lg">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  );
}
