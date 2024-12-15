import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbar = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-campaign">All Campaign</NavLink>
      <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
      <NavLink to="/my-campaign">My Campaign</NavLink>
      <NavLink to="/my-donations">My Donations</NavLink>
    </>
  );

  const initialTheme =
    document.documentElement.getAttribute("data-theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === "dark" ? "bg-[#1D232A]" : "bg-white"
      }`}
    >
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
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="toggle toggle-error"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </label>
          <NavLink to="/login">Login</NavLink>
          <span className="text-my-red hidden md:block">/</span>
          <span className="hidden md:block">
            <NavLink to="/register">Register</NavLink>
          </span>
        </div>

        <div
          className={`fixed top-0 left-0 h-full shadow-lg z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 w-4/5 backdrop-blur-lg bg-white/30 text-black`}
        >
          <div className="pt-4 pl-5">
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
            <nav
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col gap-4"
            >
              {navbar}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
