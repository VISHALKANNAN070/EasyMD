import cleanReadme from "../utils/cleanReadme.js";
import axios from "axios";

const SYSTEM_PROMPT = `You are a README generator. Given a project description, output a clean, minimal GitHub README in raw markdown.

Rules:
- Output raw markdown only. No code fences, no preamble, no explanation.
- Use proper markdown: # for title, ## for sections, \`code\` for commands.
- Only include sections that are relevant to the provided details. Do not invent or assume missing information.
- Keep it concise. No filler, no buzzwords.

Standard section order (skip if info not provided):
# Project Title
short one-line description
## Features
## Tech Stack
## Installation
## Usage
## Contributing
## License`;

const generateReadme = async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: text,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const readme = response.data?.choices[0]?.message?.content;

    if (!readme) throw new Error("No readme generated");

    const cleanedReadme = cleanReadme(readme).trim();

    return res.json({ cleanedReadme });
  } catch (err) {
    console.error(err);
  
    return res.status(500).json({
      error: err.message || "Server error",
    });
  }
};

export default generateReadme;
