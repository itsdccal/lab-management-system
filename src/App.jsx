import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { router } from "./router";
import useThemeStore from "./stores/themeStore";

function App() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
