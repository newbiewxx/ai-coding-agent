import assert from "node:assert";
import { describe, it } from "node:test";
import { generateText } from "ai";
import { ollama_model } from "../../src/models.ts";
import tools from "../../src/tools/index.ts";

describe("write file tool", () => {
  it("should call write-file tool", async () => {
    const { text, toolCalls } = await generateText({
      model: ollama_model,
      prompt: '请在当前目录下创建一个 test.txt 文件，内容是 "Hello, World!"',
      tools,
    });

    console.log({ text, toolCalls });
    console.log(toolCalls[0]?.input);
    assert.ok(toolCalls.length > 0, "工具应该被调用");
  });
});
