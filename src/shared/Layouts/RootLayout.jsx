import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="root-layout flex justify-start items-start">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
