"use client";
import { useChat } from "ai/react";
import { MessageItem } from "./message-item";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();
  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 sm:px-6">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        {isLoading && lastMessageIsUser && (
          <MessageItem
            message={{
              id: "loading",
              role: "assistant",
              content: "Thinking...",
            }}
          />
        )}
        {error && (
          <MessageItem
            message={{
              id: "error",
              role: "assistant",
              content: "Something went wrong. Please try again!",
            }}
          />
        )}
        {!error && messages.length === 0 && (
          <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
            <p className="text-lg font-semibold mb-2">
              Welcome to WonderWidget Pro Support
            </p>
            <p className="text-gray-700 mb-4">
              Hello! 👋 How can I assist you today with your WonderWidget Pro
              device? Whether you have questions about installation,
              troubleshooting, or anything else, feel free to ask. Your
              satisfaction is our priority!
            </p>

            <div className="grid grid-cols-2 gap-2 pt-4 mt-4">
              <p className="text-gray-700 italic p-2 border rounded-md text-sm">
                "Hi there! I'm having trouble connecting my WonderWidget Pro to
                my Wi-Fi network."
              </p>
              <p className="text-gray-700 italic p-2 border rounded-md text-sm">
                "My WonderWidget Pro app keeps crashing whenever I try to open
                it. How can I fix this issue?"
              </p>
              <p className="text-gray-700 italic p-2 border rounded-md text-sm">
                "I'm interested in learning more about the routines I can set up
                with my WonderWidget Pro. Can you provide some examples?"
              </p>
              <p className="text-gray-700 italic p-2 border rounded-md text-sm">
                "Is there a way to reset my WonderWidget Pro to its factory
                settings? I'm experiencing some issues and want to start fresh."
              </p>
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-t dark:border-gray-800 px-4 py-3 flex items-center gap-2 sm:px-6"
      >
        <Input
          value={input}
          onChange={handleInputChange}
          className="flex-1"
          placeholder="Type your message..."
        />
        <Button type="submit" size="icon" variant="outline">
          <SendIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}

export default ChatBox;

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
