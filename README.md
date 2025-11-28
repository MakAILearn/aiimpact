A(I)'mpact — Vercel-ready React app (Modern SaaS, blue-gray theme, structured blueprints)

Quick deploy (3 steps):
1) Download the ZIP and extract.
2) Go to https://vercel.com, sign in, and create a new project → Upload the extracted folder.
3) In Vercel Project Settings → Environment Variables, add:
   - OPENAI_API_KEY = <your OpenAI API key>
4) Deploy. The app will be available on a vercel.app URL.

Notes:
- The frontend calls /api/gpt which is a serverless function (no client-side key exposure).
- To change prompts, edit /api/gpt.js systemPrompt / userPrompt strings.
- To change UI copy, edit /src/App.jsx.
- This project uses Tailwind. Vercel will install dependencies during build.
- For local testing, you can run `npm install` and `npm run dev` (requires Node.js installed).

If you want, I can also deploy this for you — give me the OpenAI key and I will perform the deploy (or guide you step-by-step).