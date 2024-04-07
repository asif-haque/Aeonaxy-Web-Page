import { NavLink } from "react-router-dom";
import TrialButton from "./TrialButton";

const MobileNav = ({ navItems, open }) => {
  return (
    <div
      className={`md:hidden fixed z-50 bottom-0 left-0 border bg-white w-full px-3 py-5 ${
        open ? `translate-y-0` : `translate-y-full`
      } transition-all duration-500`}
    >
      <ul className="space-y-3 text-center text-xl">
        <TrialButton />
        {navItems.map((item) => (
          <li key={item.name} className="py-2">
            <NavLink to={item.to} className="py-2">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
