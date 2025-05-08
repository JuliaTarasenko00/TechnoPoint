import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import { LuSun } from "react-icons/lu";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import { useChangeTheme } from "../../helpers/context/theme/useChangeTheme";
import { path } from "../../helpers/routers";
import { SearchForm } from "./SearchForm";
import { Navigation } from "./Navigation";
import { Footer } from "../Footer/Footer";

export default function Layout() {
  const { toggleTheme, darkMode } = useChangeTheme();

  return (
    <>
      <header className=" sticky z-50 shadow-[0px_-6px_32px_2px_rgba(0,0,0,0.4)] bg-[#fff] top-0 pt-[25px] pb-[15px]">
        <div className="container px-[130px] flex justify-between items-center">
          <Link
            to={path.home}
            className="text-[25px] text-[var(--main-text-color)] font-bold dark:text-[var(--logo-color-dark)]"
          >
            TechnoPoint
          </Link>
          <p className=" text-[var(--main-text-color)] text-[18px] dark:text-[var(--main-text-color-dark)] flex items-center gap-[4px]">
            <span>
              <AiOutlineAppstoreAdd />
            </span>
            Catalog
          </p>
          <SearchForm />
          <Navigation />
          <button
            type="button"
            className=" hover:scale-[1.5] transition-transform duration-[350ms] cursor-pointer w-[24px] h-[24px] overflow-hidden relative"
            onClick={toggleTheme}
          >
            <span
              className={`block absolute w-full transition-all duration-500 text-[#000] h-full${
                !darkMode
                  ? "top-[50%] translate-y-[-50%] left-0 right-0 "
                  : " top-[-100%]"
              }`}
            >
              <LuSun className=" w-full h-full" />
            </span>
            <span
              className={`block absolute w-full transition-all duration-500 text-[#fff] h-full ${
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
      <footer className=" bg-[#000] pb-[84px]">
        <Footer />
      </footer>
    </>
  );
}
