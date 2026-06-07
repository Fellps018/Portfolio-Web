import { useEffect, useState } from "react";
import './button.css'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const html = document.documentElement;

        html.classList.remove("light-mode", "dark-mode");
        html.classList.add(`${theme}-mode`);

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            className="btn-secondary" id="button-theme"
            onClick={toggleTheme}
        >
            {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
    );
}

