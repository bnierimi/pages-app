"use client";

import { useState } from "react";

export default function ThemeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleMode = ()=>{
    setIsDarkMode(!isDarkMode);
  }

  return (
    // on:click={handleMode}
    <button type="button" title="Theme" className="p-0.5 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 overflow-hidden">
    {
      isDarkMode
        ? <i className="relative icon icon-ic_fluent_weather_sunny_20_regular flex text-xl rounded-full bg-amber-500 text-gray-700 p-0.5 transition-all ease-in-out"></i>
        : <i className="relative icon icon-ic_fluent_weather_moon_20_regular flex text-xl rounded-full bg-gray-300 p-0.5"></i>
    }
    
    </button>
  )
}
