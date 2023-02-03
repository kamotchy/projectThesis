import { Outlet, NavLink } from "react-router-dom";

import { useState } from "react";

// routes

const CreateLayout = () => {
  const [isActive, setActive] = useState(true);

  return (
    <div className="create-layout">
      <nav className="space-x-3 list-none flex">
        <li className="create-items">
          <NavLink to="sections">Sections</NavLink>
        </li>
        <li className="create-items">
          <NavLink to="account">Account</NavLink>
        </li>
        <li className="create-items">
          <NavLink to="import">Import</NavLink>
        </li>
      </nav>
      <h1 className="text-2xl font-bold">Create Layout</h1>
      <Outlet />
    </div>
  );
};

export default CreateLayout;
