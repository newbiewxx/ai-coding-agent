import assert from "node:assert";
import { describe, it } from "node:test";
import { generateText } from "ai";
import { ollama_model } from "../../src/models.ts";
import tools from "../../src/tools/index.ts";

describe("list file tool", () => {
  it("should call list-file tool", async () => {
    const { text, toolCalls } = await generateText({
      model: ollama_model,
      prompt: "请列出当前目录下的所有文件",
      tools,
    });

    console.log({ text, toolCalls });
    console.log(toolCalls[0]?.input);
    assert.ok(toolCalls.length > 0, "工具应该被调用");
  });
});
