import { Message } from "ai/react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MessageItemProps {
  message: Message;
}

export const MessageItem = ({
  message: { role, content },
}: MessageItemProps) => {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        !isAiMessage && "flex-row-reverse",
        "flex items-start gap-3"
      )}
    >
      <Avatar>
        <AvatarImage
          alt="AI Assistant"
          src={isAiMessage ? "/ai.svg" : "user.svg"}
        />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          isAiMessage ? "bg-[#E0F7FA]" : "bg-gray-100",
          " dark:bg-gray-800 rounded-lg p-3 max-w-[80%]"
        )}
      >
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};
