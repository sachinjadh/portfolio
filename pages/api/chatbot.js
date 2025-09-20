import resumeData from '../../components/resumeData';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not set' });
  }

  const systemPrompt = `You are a helpful AI assistant that answers questions about the following resume.\n\n${resumeData}\n\nAnswer user questions based only on this information.`;

  const openaiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }))
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: openaiMessages,
        max_tokens: 300,
        temperature: 0.2
      })
    });
    if (!response.ok) {
      const err = await response.json();
      return res.status(500).json({ error: err.error?.message || 'OpenAI error' });
    }
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'Sorry, I could not find an answer.';
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect to OpenAI' });
  }
}
