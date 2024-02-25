'use client'

import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

export default function ToggleButton() {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
    setDarkMode(checked);
  };

  if (!mounted) return null; // Return null if not mounted yet

  return (
    <DarkModeSwitch
      style={{ color: 'white' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};
