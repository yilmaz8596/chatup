import { useThemeStore } from "../store/useThemeStore";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {theme.slice(0, 1).toUpperCase() + theme.slice(1)}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        {["cupcake", "retro", "cyberpunk", "valentine", "aqua"].map(
          (themeName) => (
            <li key={themeName}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={themeName}
                value={themeName}
                checked={theme === themeName}
                onChange={handleThemeChange}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
