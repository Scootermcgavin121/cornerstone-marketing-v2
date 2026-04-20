import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { readFileSync } from "fs";
import { join } from "path";

const knowledge = readFileSync(
  join(process.cwd(), "src", "app", "chatbot", "knowledge.md"),
  "utf-8"
);

const personality = readFileSync(
  join(process.cwd(), "src", "app", "chatbot", "system-prompt.md"),
  "utf-8"
);

const systemPrompt = `${personality}

## Product Knowledge
${knowledge}`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Limit to last 20 messages
  const recentMessages = messages.slice(-20);

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages: recentMessages,
  });

  return result.toDataStreamResponse();
}
