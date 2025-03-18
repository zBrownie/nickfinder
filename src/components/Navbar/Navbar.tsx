import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";

export const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-center items-center">
        {" "}
        {/* Centralizado */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Gerador de Nick
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer absolute right-4" /* Botão à direita */
        >
          {darkMode ? (
            <span
              role="img"
              aria-label="Light Mode"
              className="h-6 w-6 text-yellow-500"
            >
              🌞
            </span>
          ) : (
            <span
              role="img"
              aria-label="Dark Mode"
              className="h-6 w-6 text-gray-800 dark:text-white"
            >
              🌜
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
