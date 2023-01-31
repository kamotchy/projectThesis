import { NavLink } from "react-router-dom";

import { adminRoutes } from "../global/Admin";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <div className="flex flex-col justify-between">
        <div className="sidebar-data  space-y-5">
          <div className="user-logo"></div>
          {adminRoutes.map((data) => {
            return (
              <li className="mx-auto" key={data.id}>
                <NavLink to={data.path} className=" sidebar-items">
                  <span className="data-icon text-2xl">{data.icon}</span>
                  <span className="text-md ml-5">{data.name}</span>
                </NavLink>
              </li>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
