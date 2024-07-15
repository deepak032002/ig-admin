import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import routes from "./design-system/organisms/sidebar/route";
import { Provider } from "./provider";

const router = createBrowserRouter(
  routes.map((item) => {
    if (item.isHaveChild) {
      return {
        path: item.path,
        element: <Provider />,
        children: item.child.map((child) => {
          return {
            path: child.path,
            element: <child.element />,
          };
        }),
      };
    }

    return {
      path: item.path,
      element: <item.element />,
    };
  })
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
