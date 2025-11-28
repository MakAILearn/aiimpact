// /api/gpt.js (Vercel serverless)
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const body = req.body || {};
    const mode = body.mode || 'blueprint';
    const inputs = body.inputs || {};

    const systemPrompt = `You are A(I)'mpact — Professional Consultant Assistant. Use a calm, practical, consultant tone. Produce a structured blueprint.`;
    const userPrompt = `Generate a concise AI Opportunity Blueprint for the goal: ${inputs.goal || 'unspecified'}; users: ${inputs.users || '-'}; constraints: ${inputs.constraints || '-'}; tools: ${inputs.tools || '-'}; kpi: ${inputs.kpi || '-'}.`;

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 900,
      }),
    });

    const j = await openaiRes.json();
    const output = j.choices?.[0]?.message?.content || 'No output';
    res.status(200).json({ output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ output: 'Error generating blueprint.' });
  }
}