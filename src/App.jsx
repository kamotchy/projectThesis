import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./shared/Layouts/RootLayout";

// admin const
import { adminRoutes } from "./global/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {adminRoutes.map((data) => {
        if (data.subdata) {
          return (
            <Route key={data.id} path={data.path} element={data.element}>
              {data.subdata.map((sub) => {
                return (
                  <Route key={sub.id} path={sub.path} element={sub.element} />
                );
              })}
            </Route>
          );
        } else {
          return (
            <Route key={data.id} path={data.path} element={data.element} />
          );
        }
      })}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
