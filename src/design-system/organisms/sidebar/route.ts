import { IconType } from "react-icons";
import { HiOutlineHome, HiOutlinePencil, HiOutlineUsers } from "react-icons/hi";

import Dashboard from "@/pages";

interface Child {
  path: string;
  name: string;
  element: () => JSX.Element;
}

interface RouteWithoutChild {
  isHaveChild: false;
  element: () => JSX.Element;
}

export interface RouteWithChild {
  isHaveChild: true;
  child: Child[];
}

export type Route = {
  path: string;
  icon: IconType;
  name: string;
} & (RouteWithoutChild | RouteWithChild);

let routes: Route[] = [
  {
    path: "/",
    icon: HiOutlineHome,
    name: "Dashboard",
    isHaveChild: false,
    element: Dashboard,
  },

  {
    path: "/posts",
    icon: HiOutlinePencil,
    name: "Posts",
    isHaveChild: true,
    child: [
      {
        path: "all",
        name: "All Post",
        element: Dashboard,
      },
      {
        path: "create",
        name: "Create Post",
        element: Dashboard,
      },
      {
        path: "edit/:postId",
        name: "Edit Post",
        element: Dashboard,
      },
    ],
  },

  {
    path: "/users",
    icon: HiOutlineUsers,
    name: "Users",
    isHaveChild: true,
    child: [
      {
        path: "all",
        name: "All User",
        element: Dashboard,
      },
      {
        path: "create",
        name: "Create User",
        element: Dashboard,
      },
    ],
  },
];

export default routes;
