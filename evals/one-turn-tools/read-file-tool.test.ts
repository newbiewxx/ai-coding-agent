import assert from "node:assert";
import { describe, it } from "node:test";
import { generateText } from "ai";
import { ollama_model } from "../../src/models.ts";
import tools from "../../src/tools/index.ts";

describe("read file tool", () => {
  it("should call read-file tool", async () => {
    const { text, toolCalls } = await generateText({
      model: ollama_model,
      prompt: "请读取一下 package.json 文件的内容",
      tools,
    });

    console.log({ text, toolCalls });
    console.log(toolCalls[0]?.input);
    assert.ok(toolCalls.length > 0, "工具应该被调用");
  });
});
