import { useEffect, useState } from "react";
import "./button.css";

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

    return (
        <button
            id="button-theme"
            className="btn-secondary"
            onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
            }
            title="Trocar tema"
            aria-label="Trocar tema"
        >
            <i
                className={`fa-solid ${
                    theme === "light"
                        ? "fa-moon"
                        : "fa-sun"
                }`}
            ></i>
        </button>
    );
}