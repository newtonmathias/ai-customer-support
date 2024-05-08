import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import ChatBox from "@/components/chat-box";

export default function Component() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="text-lg font-bold" href="#">
            <MountainIcon className="h-6 w-6 mr-2 inline-block" />
            WW Inc.
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Products
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline">
              Sign In
            </Button>
            <Button size="sm" variant="ghost">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <div className="w-full lg:grid lg:grid-cols-2">
        <section className="w-full py-12  bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                WonderWidget Pro: Your Smart Home Automation Hub
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Welcome to WonderWidget Pro, the ultimate solution for
                transforming your house into a smart home. WonderWidget Pro is
                an advanced automation hub designed to seamlessly integrate with
                up to 50 smart devices, offering unparalleled convenience and
                control.
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Key Features:</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>Hands-free Voice Commands</li>
                  <li>Wide Compatibility</li>
                  <li>Advanced Scheduling System</li>
                  <li>Robust Security</li>
                  <li>Energy-efficient Operation</li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white dark:bg-gray-900 h-[80vh] sm:h-[600px] overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="px-4 py-3 border-b dark:border-gray-800 sm:px-6">
              <h3 className="text-lg font-semibold">Chat with AI Support</h3>
            </div>
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

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
