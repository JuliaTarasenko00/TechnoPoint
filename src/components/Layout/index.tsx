import { Suspense, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { patch } from "../../helpers/routers";
import { LuSun } from "react-icons/lu";
import { HiOutlineMoon } from "react-icons/hi";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };
  return (
    <>
      <header className=" py-[18px]">
        <div className="container px-[160px] flex justify-between">
          <Link to={patch.home} className="text-[18px] font-bold">
            TechnoPoint
          </Link>
          <nav className=" flex gap-[52px]">
            <NavLink to={patch.home}>Home</NavLink>
            <NavLink to={patch.about}>About</NavLink>
          </nav>
          <button
            type="button"
            className=" cursor-pointer w-[20px] min-h-full overflow-hidden relative"
            onClick={toggleTheme}
          >
            <span
              className={`block absolute w-full transition-all duration-500 text-[#000] h-[20px]${
                !darkMode
                  ? "top-[50%] translate-y-[-50%] left-0 right-0 "
                  : " top-[-100%]"
              }`}
            >
              <LuSun className=" w-full h-full" />
            </span>
            <span
              className={`block absolute w-full transition-all duration-500 text-[#fff] h-[20px] ${
                darkMode ? "bottom-[50%] translate-y-[50%]" : "bottom-[-100%]"
              }`}
            >
              <HiOutlineMoon className=" w-full h-full" />
            </span>
          </button>
        </div>
      </header>
      <main>
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
