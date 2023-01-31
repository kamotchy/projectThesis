import { Outlet, NavLink } from "react-router-dom";

// routes

const CreateLayout = () => {
  return (
    <div className="create-layout">
      <nav>
        <NavLink to="sections">Sections</NavLink>
        <NavLink to="account">Account</NavLink>
        <NavLink to="import">Import</NavLink>
      </nav>
      <h1 className="text-2xl font-bold">Create Layout</h1>
      <Outlet />
    </div>
  );
};

export default CreateLayout;
