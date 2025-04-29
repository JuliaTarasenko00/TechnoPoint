import { NavLink, useLocation } from "react-router-dom";

import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

import { path } from "../../helpers/routers";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className=" flex gap-[52px]">
        <NavLink
          to={path.home}
          className={() =>
            `${
              pathname === path.home
                ? "text-[var(--nav-text-color-active)] opacity-[1]"
                : "text-[var(--nav-text-color)]"
            } text-[17px] opacity-[0.7] hover:opacity-[1]  hover:text-[var(--nav-text-color-active)] transition-colors duration-[350ms] dark:hover:text-[var(--nav-text-color-active-dark)] dark:text-[var(--nav-text-color-dark)]`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={path.about}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[var(--nav-text-color-active)] opacity-[1]"
                : "text-[var(--nav-text-color)]"
            } text-[17px] opacity-[0.7] hover:opacity-[1]  hover:text-[var(--nav-text-color-active)] transition-colors duration-[350ms] dark:hover:text-[var(--nav-text-color-active-dark)] dark:text-[var(--nav-text-color-dark)]`
          }
        >
          About
        </NavLink>
        <NavLink
          to={path.wishlist}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#ff0051]" : "text-[var(--main-text-color)]"
            } w-[24px] h-[24px] transition-colors duration-[350ms] hover:text-[#ff0051] dark:text-[var(--main-text-color-dark)]`
          }
        >
          <IoIosHeartEmpty />
        </NavLink>
        <NavLink
          to={path.cart}
          className="  hover:scale-[1.5] w-[24px] h-[24px] transition-transform duration-[350ms] text-[var(--main-text-color)]  dark:text-[var(--main-text-color-dark)]"
        >
          <PiShoppingCartLight />
        </NavLink>
      </nav>
      <button
        type="button"
        className=" w-[24px] h-[24px]  hover:scale-[1.5] transition-transform duration-[350ms] text-[var(--main-text-color)]  dark:text-[var(--main-text-color-dark)]"
      >
        <GoPerson />
      </button>
    </>
  );
};
