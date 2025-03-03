"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";

const Homepage = () => {
  const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AssistantRuntimeProvider runtime={runtime}>
        <div className="w-full h-full flex">
          <section className="w-[20%] h-full flex flex-col justify-start items-center border-r-[1px] border-neutral-200">
            <ThreadList />
          </section>
          <section className="w-[80%] h-full flex justify-center items-center">
            <Thread />
          </section>
        </div>
      </AssistantRuntimeProvider>
    </div>
  );
};

export default Homepage;
