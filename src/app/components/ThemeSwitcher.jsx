'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;
  return (
    <button
      type='button'
      onClick={handleClick}
      className={`cursor-pointer rounded-md p-2 border-2 ${theme === 'light' ? 'border-primary' : 'border-secondary'}`}
    >
      {theme === 'light' ? (
        <FaSun size={28} className='text-primary' />
      ) : (
        <FaMoon size={28} className='text-secondary' />
      )}
    </button>
  );
};

export default ThemeSwitcher;
