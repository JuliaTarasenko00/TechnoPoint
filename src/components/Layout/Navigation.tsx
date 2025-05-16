import { MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

import { path } from "../../helpers/routers";
import { useModalProvider } from "../../helpers/context/ModalProvider/useModalProvider";
import { Authorization } from "../Authorization";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { openModal } = useModalProvider();

  const token: string = "";

  const handelClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (token === "") {
      e.preventDefault();

      return openModal(<Authorization />);
    }
  };

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
            } text-[17px] opacity-[0.7] hover:opacity-[1]  hover:text-[var(--nav-text-color-active)] focus:opacity-[1]  focus:text-[var(--nav-text-color-active)] transition-colors duration-[350ms]`
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
            } text-[17px] opacity-[0.7] hover:opacity-[1]  hover:text-[var(--nav-text-color-active)] focus:opacity-[1]  focus:text-[var(--nav-text-color-active)] transition-colors duration-[350ms]`
          }
        >
          About
        </NavLink>
        <NavLink
          to={path.wishlist}
          onClick={handelClick}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#ff0051]" : "text-[var(--main-text-color)]"
            } w-[24px] h-[24px] transition-colors duration-[350ms] hover:text-[#ff0051] focus:text-[#ff0051]`
          }
        >
          <IoIosHeartEmpty />
        </NavLink>
        <NavLink
          to={path.cart}
          className="  hover:scale-[1.5] focus:scale-[1.5] w-[24px] h-[24px] transition-transform duration-[350ms] text-[var(--main-text-color)]"
        >
          <PiShoppingCartLight />
        </NavLink>
        <button
          type="button"
          onClick={() => openModal(<Authorization />)}
          className=" cursor-pointer w-[24px] h-[24px]  hover:scale-[1.5] focus:scale-[1.5] transition-transform duration-[350ms] text-[var(--main-text-color)]"
        >
          <GoPerson />
        </button>
      </nav>
    </>
  );
};
