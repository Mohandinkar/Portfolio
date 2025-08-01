import React, { useEffect } from 'react'
import { useState } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{

    const storedTheme = localStorage.getItem("theme");

    if(storedTheme === "dark"){
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    }
    else{
        setIsDarkMode(false);
        localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme=()=>{
    if(isDarkMode){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }
  }

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 rounded-full duration-300",
        "focus:outline-hidden"
    )}>
      {isDarkMode ? (<Sun className='h-6 w-6 text-yellow-300'/>) : 
      (<Moon className='h-6 w-6 text-blue-900'/>)}
    </button>
  )
}

export default ThemeToggle
