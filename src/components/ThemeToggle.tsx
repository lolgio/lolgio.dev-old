import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
    const [isMounted, setIsMounted] = useState(false);

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
        setIsMounted(true);
    }, [theme]);

    if (!isMounted) {
        return null;
    }

    return (
        <button onClick={handleClick} className="ml-auto">
            {theme === "dark" ? <img src="/sun-fill.svg" /> : <img src="/moon-fill.svg" />}
        </button>
    );
}
