import { Outlet, NavLink } from "react-router-dom";

const DataLayout = () => {
  return (
    <div className="data-layout flex flex-col items-start p-10">
      <nav className="data-navbar space-x-10 mb-5 list-none">
        <li className="data-items">
          <NavLink to="accounts ">Account</NavLink>
        </li>
        <li className="data-items">
          <NavLink to="section">Sections</NavLink>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};

export default DataLayout;
