import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);  
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="toggle toggle-error"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </label>
  );
};

export default ThemeToggle;
