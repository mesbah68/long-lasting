import RightArrowIcon from "../icons/rightArrow";

const Navbar = async () => {
  return (
    <div className="z-10 max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex fixed">
      <div className="navbar bg-white text-black shadow-md rounded-xl z-50">
        <div className="navbar-start !w-1/3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
              <li><a>Product</a></li>
              <li><a>Blog</a></li>
              <li><a>Docs</a></li>
              <li><a>Pricing</a></li>
            </ul>
          </div>
          <span className="text-xl cursor-pointer ml-2">Long Lasting</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Product</a></li>
            <li><a>Blog</a></li>
            <li><a>Docs</a></li>
            <li><a>Pricing</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost text-sm mr-2">Log in</a>
          <a className="btn btn-neutral text-white">Sign up free
            <RightArrowIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
