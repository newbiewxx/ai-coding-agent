import type { ModelMessage } from "ai";
import { agent } from "../agent.ts";
import { uiStore } from "../ui/ui.store.ts";

class AgentService {
  private constructor() {}

  private abortController?: AbortController;

  async generateStream(messages: ModelMessage[]) {
    this.abortController = new AbortController();

    const result = await agent.stream({
      messages,
      abortSignal: this.abortController.signal,
    });

    return { result, abort: () => this.abortController?.abort() };
  }

  requestTool({
    toolName,
    arg,
    reason,
  }: {
    toolName: string;
    arg?: string;
    reason?: string;
  }) {
    return new Promise<boolean>((res) => {
      uiStore.approval = { toolName, arg, reason, resolve: res };
    }).finally(() => {
      uiStore.approval = undefined;
    });
  }

  static getInstance(): AgentService {
    return new AgentService();
  }
}

export default AgentService.getInstance();
