"use client";
import { useEffect } from "react";

export default function GlowingCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "25px";
    cursor.style.height = "25px";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.mixBlendMode = "screen";
    cursor.style.transition = "transform 0.1s ease-out";
    cursor.style.zIndex = "50";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 12 + "px";
      cursor.style.top = e.clientY - 12 + "px";
      const isDark = document.documentElement.classList.contains("dark");
      cursor.style.background = isDark
        ? "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 70%)"
        : "radial-gradient(circle, rgba(1,1,1,1) 0%, rgba(0,0,0,0) 100%)";
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}
