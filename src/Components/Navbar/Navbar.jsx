import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className=" text-stone-50 flex justify-between  flex-wrap bg-cyan-950 p-8">
        <div className="text-2xl font-bold uppercase">Start Framework</div>
        <ul className="links font-semibold flex">
          <li  className="md:mr-3 ">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="md:mr-3">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="md:mr-3">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="md:mr-3">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
