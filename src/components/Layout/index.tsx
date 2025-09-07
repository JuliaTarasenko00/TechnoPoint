import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { path } from '../../helpers/routers';
import { SearchForm } from './SearchForm';
import { Navigation } from './Navigation';
import { Footer } from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--component-background)] pt-[25px] pb-[15px] shadow-[0px_-6px_32px_2px_rgba(0,0,0,0.4)]">
        <div className="container flex items-center justify-between px-[130px]">
          <Link
            to={path.home}
            className="text-[25px] font-bold text-[var(--main-text-color)]"
          >
            TechnoPoint
          </Link>
          <p className="flex items-center gap-[4px] text-[18px] text-[var(--main-text-color)]">
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
      <footer className="bg-[var(--dark-background)] pb-[84px]">
        <Footer />
      </footer>
    </>
  );
}
