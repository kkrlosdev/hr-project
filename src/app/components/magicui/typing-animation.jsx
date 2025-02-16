"use client"
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

export default function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, duration);

    if (index === text.length) {
      clearInterval(typingEffect);
    }

    return () => clearInterval(typingEffect);
  }, [index, text, duration]);

  return (
    <h1
      className={cn(
        "text-center font-display text-2xl font-normal tracking-[-0.02em] drop-shadow-sm md:text-[2.75rem] md:leading-[5rem]",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}
