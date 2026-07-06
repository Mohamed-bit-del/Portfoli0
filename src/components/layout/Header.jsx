import { Link } from "react-router-dom";
import { navigation } from "../../config/navigation";
import { siteConfig } from "../../config/siteConfig";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useTheme } from "../../hooks/useTheme";

const sectionIds = navigation.map((item) => item.id);

export default function Header() {
  const activeId = useScrollSpy(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-xl font-bold">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-colors ${
                activeId === item.id
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
