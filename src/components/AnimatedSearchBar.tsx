"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function AnimatedSearchBar({ searchQuery, setSearchQuery }: Props) {
  const placeholders = ["name", "email", "phone"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [glow, setGlow] = useState(false); // for glow-on-keystroke

  // Typing placeholder animation
  useEffect(() => {
    let i = 0;
    const currentPlaceholder = placeholders[placeholderIndex];
    const typingInterval = setInterval(() => {
      setTypedPlaceholder(currentPlaceholder.slice(0, i + 1));
      i++;
      if (i === currentPlaceholder.length) clearInterval(typingInterval);
    }, 100);

    const timer = setTimeout(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      setTypedPlaceholder("");
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [placeholderIndex]);

  // Trigger glow per keystroke
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setGlow(true);
    setTimeout(() => setGlow(false), 300); // glow lasts 0.3s per keystroke
  };

  return (
    <div className="relative">
      <Search
        className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-transform duration-200 `}
      />
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder={`Search by ${typedPlaceholder}`}
        className={`
          pl-10 h-12 w-full rounded-lg bg-card border transition-all duration-50
          focus:outline-none
          border-gray-300 dark:border-gray-600
          ${glow ? "animate-pulse-glow" : ""}
        `}
      />
    </div>
  );
}
