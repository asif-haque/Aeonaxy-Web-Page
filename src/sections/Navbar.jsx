import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import Logo from "../components/Logo";
import MobileNav from "../components/MobileNav";
import { NavLink } from "react-router-dom";
import TrialButton from "../components/TrialButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { streak } from "../data/data";
import { AiFillThunderbolt } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  window.addEventListener("click", () => {
    setOpen(false);
  });
  const navItems = [
    { name: "Home", icon: <IoMdHome className="text-xl" />, to: "/" },
    {
      name: "Courses",
      icon: <IoDocuments className="text-xl" />,
      to: "/courses",
    },
    { name: "Today", icon: <CiCalendar className="text-xl" />, to: "/today" },
  ];
  return (
    <div
      className="h-[10vh] max-h-[80px] flex gap-2 items-center justify-between shadow px-5 lg:px-10"
      onClick={(e) => e.stopPropagation()}
    >
      <Logo />
      <ul className="md:flex hidden md:gap-3 lg:gap-7 h-full">
        {navItems.map((item) => (
          <li key={item.name} className="h-full">
            <NavLink to={item.to} className="h-full flex items-center gap-1">
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="bg-neutral-200 m-auto md:m-0 rounded-md w-[30%] min-w-[150px] h-7 px-5"
        placeholder="Search"
      />
      <TrialButton classes="hidden md:block " />
      <div className="flex items-center">
        {streak} <AiFillThunderbolt className="text-yellow-400 text-lg" />
      </div>
      <GiHamburgerMenu
        className="text-xl cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      />
      <MobileNav navItems={navItems} open={open} />
    </div>
  );
};

export default Navbar;
