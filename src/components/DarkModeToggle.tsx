import React, { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="
        w-10 h-10           /* container size */
        p-2  pl-2.5               /* padding around toggle */
        rounded-xl         /* soft rounded corners */
        border-2            /* border width */
        border-gray-300      /* light border */
        dark:border-gray-600 /* border in dark mode */
        flex items-center justify-center
        bg-white dark:bg-gray-800
      ">
        <Classic className="scale-125"
          onToggle={() => setIsDark(prev => !prev)}
          style={{ width: "60px", height: "60px" }} // make toggle bigger
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        />
      </div>
    </div>

  );
}
