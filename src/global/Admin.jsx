// main menu
import Dashboard from "../pages/admin/Dashboard";
import Activity from "../pages/admin/Activity";

// sub menu Data
import Accounts from "../pages/admin/subdata/Accounts";
import Section from "../pages/admin/subdata/Section";

// sub menu Create
import Sections from "../pages/admin/subcreate/Sections";
import Account from "../pages/admin/subcreate/Account";
import ImportCSV from "../pages/admin/subcreate/ImportCSV";

// icons
import { FaHome, FaDatabase, FaPlusCircle, FaHistory } from "react-icons/fa";

// root layouts
import CreateLayout from "../shared/Layouts/admin/CreateLayout";
import DataLayout from "../shared/Layouts/admin/DataLayout";

export const adminRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: <FaHome />,
    element: <Dashboard />,
  },
  {
    id: 2,
    name: "Data",
    path: "data",
    icon: <FaDatabase />,
    element: <DataLayout />,
    subdata: [
      {
        id: 1,
        name: "Accounts",
        path: "accounts",
        element: <Accounts />,
      },
      {
        id: 2,
        name: "Section",
        path: "section",
        element: <Section />,
      },
    ],
  },
  {
    id: 3,
    name: "Create",
    path: "create",
    icon: <FaPlusCircle />,
    element: <CreateLayout />,
    subdata: [
      {
        id: 1,
        name: "Sections",
        path: "sections",
        element: <Sections />,
      },
      {
        id: 2,
        name: "Account",
        path: "account",
        element: <Account />,
      },
      {
        id: 3,
        name: "ImportCSV",
        path: "import",
        element: <ImportCSV />,
      },
    ],
  },
  {
    id: 4,
    name: "Activity",
    path: "activity",
    icon: <FaHistory />,
    element: <Activity />,
  },
];
