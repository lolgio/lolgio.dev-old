import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    if (!theme) {
        return null;
    }

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={handleClick} className="ml-auto">
            {theme === "dark" ? <img src="/sun-fill.svg" /> : <img src="/moon-fill.svg" />}
        </button>
    );
}
