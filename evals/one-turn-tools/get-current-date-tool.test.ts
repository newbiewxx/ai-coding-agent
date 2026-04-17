import assert from "node:assert";
import { describe, it } from "node:test";
import { generateText } from "ai";
import { ollama_model } from "../../src/models.ts";
import tools from "../../src/tools/index.ts";

describe("get current date tool", () => {
  it("should call get-current-time tool", async () => {
    const { text, toolCalls } = await generateText({
      model: ollama_model,
      prompt: "现在几点了？",
      tools,
    });

    console.log({ text, toolCalls });
    assert.ok(toolCalls.length > 0, "工具应该被调用");
  });
});
