"use client";

import { useState, useEffect } from "react";

export function ToggleMode() {
  const [theme, setTheme] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setIsChecked(true);
    } else {
      setTheme("light");
      setIsChecked(false);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsChecked(false);
    }
  }, [theme]);

  const themeCheck = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsChecked(!setIsChecked);
  };

  return (
    <>
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={themeCheck}
        />
        <div
          className="w-11 h-6 
        bg-gray-700 rounded-full peer dark:bg-gray-600 
         peer-checked:after:translate-x-full
         peer-checked:after:border-black after:content-[''] 
         after:absolute after:top-0.5 after:left-[2px] 
         after:bg-white after:border-gray-600 
         after:border after:rounded-full after:h-5 after:w-5 
         after:transition-all border-gray-300 
         peer-checked:bg-gray-200"
        ></div>
      </label>
    </>
  );
}
