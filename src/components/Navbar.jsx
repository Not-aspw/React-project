import { Link, NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-16 w-full items-center justify-between bg-blue-400 px-4 text-white lg:px-12">
        <Link to="/" className="text-lg font-bold">
          Fashion Shop
        </Link>
        <button onClick={toggleMenu} className="cursor-pointer text-xl lg:hidden">
          &#8801;
        </button>

        <div
          className={`fixed inset-0 flex transform items-center justify-center bg-sky-600 opacity-80 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="text-center text-3xl">
            <li className="my-4">
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink to="/Shop" onClick={toggleMenu}>
                Shop
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink to="/Cart" onClick={toggleMenu}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        {/* desktop view Navigation */}
        <ul className="gap-4 hidden lg:flex">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-400": "hover:text-gray-300"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({isActive}) => isActive ? "text-yellow-400": "hover:text-gray-300"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({isActive}) => isActive ? "text-yellow-400": "hover:text-gray-300"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
