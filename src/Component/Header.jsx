
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbar = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>All Campaign</NavLink>
      <NavLink>Add New Campaign</NavLink>
      <NavLink>My Campaign</NavLink>
      <NavLink>My Donations</NavLink>
    </>
  );

  return (
    <div className="w-11/12 mx-auto flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RxCross1 size={24} /> : <FaBars size={24} />}
        </div>
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-my-red">Crowd </span>
          <span className="text-my-gray">Cube</span>
        </div>
      </div>

      <div className="lg:flex gap-8 font-semi tracking-wider hidden">
        {navbar}
      </div>

      <div className="flex gap-2 items-center">
        <ThemeToggle></ThemeToggle>
        <button className="btn bg-my-red text-my-gray">Register</button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-4/5`}
      >
        <div className="pt-7 pl-5">
          <div className="flex items-center mb-6 gap-2">
            <div
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <RxCross1 size={24} />
            </div>
            <div className="font-bold text-xl md:text-2xl">
              <span className="text-my-red">Crowd </span>
              <span className="text-my-gray">Cube</span>
            </div>
          </div>
          <nav onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col gap-4">{navbar}</nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
