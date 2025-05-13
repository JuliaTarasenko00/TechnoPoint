import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import { AiOutlineAppstoreAdd } from "react-icons/ai";

import { path } from "../../helpers/routers";
import { SearchForm } from "./SearchForm";
import { Navigation } from "./Navigation";
import { Footer } from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <header className=" sticky z-50 shadow-[0px_-6px_32px_2px_rgba(0,0,0,0.4)] bg-[var(--component-background)] top-0 pt-[25px] pb-[15px]">
        <div className="container px-[130px] flex justify-between items-center">
          <Link
            to={path.home}
            className="text-[25px] text-[var(--main-text-color)] font-bold"
          >
            TechnoPoint
          </Link>
          <p className=" text-[var(--main-text-color)] text-[18px] flex items-center gap-[4px]">
            <span>
              <AiOutlineAppstoreAdd />
            </span>
            Catalog
          </p>
          <SearchForm />
          <Navigation />
        </div>
      </header>
      <main>
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className=" bg-[var(--dark-background)] pb-[84px]">
        <Footer />
      </footer>
    </>
  );
}
