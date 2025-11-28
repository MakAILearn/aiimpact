import React, { useState } from "react";

export default function App() {
  const [view, setView] = useState("menu");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({
    goal: "",
    users: "",
    tools: "",
    constraints: "",
    kpi: "",
    privacy: "no",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submitBlueprint(e) {
    e.preventDefault();
    setLoading(true);
    setMessages([]);
    try {
      const payload = { mode: "blueprint", inputs: form };
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setMessages([{ role: "assistant", text: data.output }]);
    } catch (err) {
      setMessages([{ role: "assistant", text: "There was an error contacting the backend." }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function renderMessages() {
    return (
      <div className="space-y-4 mt-6">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "assistant" ? "bg-slate-50 p-4 rounded" : "bg-sky-50 p-4 rounded"}>
            <pre className="whitespace-pre-wrap">{m.text}</pre>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-slate-900">A(I)’mpact</div>
            <div className="text-sm text-slate-500">Professional Consultant Assistant</div>
          </div>
          <div className="space-x-2">
            <button onClick={() => setView("menu")} className="px-3 py-2 rounded bg-white border">Home</button>
            <a className="px-3 py-2 rounded bg-sky-600 text-white" href="#try">Try</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {view === "menu" && (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-extrabold mb-3 text-slate-900">A(I)’mpact — Professional Consultant</h1>
            <p className="text-slate-600 mb-6">A calm, modern assistant that helps leaders turn AI possibilities into practical systems and plans.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button onClick={() => setView("clarity")} className="p-6 bg-white rounded-lg shadow hover:shadow-md text-left">
                <h3 className="font-semibold text-slate-900">Clarity Scan</h3>
                <p className="text-sm text-slate-500 mt-2">15–20 minute guided clarity session.</p>
              </button>

              <button onClick={() => setView("walkthrough")} className="p-6 bg-white rounded-lg shadow hover:shadow-md text-left">
                <h3 className="font-semibold text-slate-900">A(I)’mpact Framework Walkthrough</h3>
                <p className="text-sm text-slate-500 mt-2">Explore the 5-layer model interactively.</p>
              </button>

              <button onClick={() => setView("blueprint")} className="p-6 bg-white rounded-lg shadow hover:shadow-md text-left">
                <h3 className="font-semibold text-slate-900">AI Opportunity Blueprint</h3>
                <p className="text-sm text-slate-500 mt-2">Generate a prioritized 30/90-day blueprint.</p>
              </button>
            </div>
          </div>
        )}

        {view === "clarity" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold">Clarity Scan — Step 1</h2>
            <p className="text-slate-600 mt-2">What is the main outcome you want in the next 90 days?</p>
            <textarea name="goal" value={form.goal} onChange={handleChange} className="w-full border rounded mt-3 p-2" rows={4} />

            <p className="text-slate-600 mt-4">Who will benefit or use this?</p>
            <input name="users" value={form.users} onChange={handleChange} className="w-full border rounded mt-2 p-2" />

            <p className="text-slate-600 mt-4">Top constraints (budget, skills, data)?</p>
            <input name="constraints" value={form.constraints} onChange={handleChange} className="w-full border rounded mt-2 p-2" />

            <div className="mt-4 flex gap-2">
              <button onClick={() => setView("menu")} className="px-4 py-2 rounded bg-slate-100">Back</button>
              <button onClick={() => setView("clarity-summary")} className="px-4 py-2 rounded bg-sky-600 text-white">Continue</button>
            </div>
          </div>
        )}

        {view === "clarity-summary" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold">Clarity Summary</h2>
            <div className="mt-4">
              <strong>Goal:</strong>
              <div className="p-3 bg-slate-50 rounded mt-2">{form.goal || "—"}</div>
            </div>
            <div className="mt-4">
              <strong>Users:</strong>
              <div className="p-3 bg-slate-50 rounded mt-2">{form.users || "—"}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <button onClick={() => setView("clarity")} className="px-4 py-2 rounded bg-slate-100">Edit</button>
              <button onClick={() => setView("blueprint")} className="px-4 py-2 rounded bg-sky-600 text-white">Build Blueprint</button>
            </div>
          </div>
        )}

        {view === "walkthrough" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold">A(I)’mpact 5-Layer Walkthrough</h2>
            <ol className="list-decimal ml-6 mt-4 space-y-3 text-slate-700">
              <li><strong>Layer 1 — Foundation:</strong> technical, data, AI literacy.</li>
              <li><strong>Layer 2 — Clarity:</strong> define goals, constraints, opportunities.</li>
              <li><strong>Layer 3 — Systems & Strategy:</strong> map workflows & decision loops.</li>
              <li><strong>Layer 4 — Application & Prototyping:</strong> build quick prototypes.</li>
              <li><strong>Layer 5 — Transformation & Impact:</strong> embed into habits & systems.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button onClick={() => setView("menu")} className="px-4 py-2 rounded bg-slate-100">Back</button>
              <button onClick={() => setView("menu")} className="px-4 py-2 rounded bg-sky-600 text-white">Done</button>
            </div>
          </div>
        )}

        {view === "blueprint" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold">AI Opportunity Blueprint</h2>
            <form onSubmit={submitBlueprint} className="mt-4 space-y-3">
              <label className="block text-sm text-slate-700">Primary Goal (one sentence)</label>
              <input name="goal" value={form.goal} onChange={handleChange} className="w-full border rounded p-2" />

              <label className="block text-sm text-slate-700">Users / Stakeholders</label>
              <input name="users" value={form.users} onChange={handleChange} className="w-full border rounded p-2" />

              <label className="block text-sm text-slate-700">Tools or Data Available</label>
              <input name="tools" value={form.tools} onChange={handleChange} className="w-full border rounded p-2" />

              <label className="block text-sm text-slate-700">Key constraints</label>
              <input name="constraints" value={form.constraints} onChange={handleChange} className="w-full border rounded p-2" />

              <label className="block text-sm text-slate-700">Primary KPI</label>
              <input name="kpi" value={form.kpi} onChange={handleChange} className="w-full border rounded p-2" />

              <div className="flex gap-2 mt-4">
                <button onClick={() => setView("menu")} type="button" className="px-4 py-2 rounded bg-slate-100">Back</button>
                <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-sky-600 text-white">{loading ? "Building..." : "Generate Blueprint"}</button>
              </div>
            </form>

            {renderMessages()}
          </div>
        )}

      </main>

      <footer className="text-center p-6 text-sm text-slate-500">A(I)’mpact — modern, practical, and calm.</footer>
    </div>
  );
}