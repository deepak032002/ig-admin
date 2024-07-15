import { Card } from "@nextui-org/react";
import { FaBookReader } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import routes from "./route";
import SidebarGroup from "./SidebarGroup";

const Sidebar: React.FC<{ openSidebar: boolean }> = ({ openSidebar }) => {
  const location = useLocation();

  return (
    <div className="w-full h-full">
      <Card className={`h-full py-2 px-4`}>
        <div
          className={`w-full flex gap-2 items-center text-2xl font-medium font-icon py-4 whitespace-nowrap`}
        >
          <FaBookReader className="text-primary flex-shrink-0" size={22} />
          {openSidebar ? <p>India Gyaan</p> : ""}
        </div>

        {openSidebar ? (
          <p className={`text-neutral-400 font-medium text-xs my-2`}>Menu</p>
        ) : (
          <p className="flex px-2 my-2 text-neutral-400">...</p>
        )}

        <div className="w-full space-y-1">
          {routes.map((route, index) => {
            if (route.isHaveChild) {
              return (
                <SidebarGroup
                  key={index}
                  openSidebar={openSidebar}
                  route={route}
                />
              );
            } else {
              return (
                <div
                  key={index}
                  className={`relative py-4 flex gap-3 items-center cursor-pointer text-neutral-600 before:absolute before:z-[1] before:duration-100 before:top-0 before:h-full before:bg-sky-100 hover:text-sky-600 before:rounded-e-3xl ${
                    openSidebar
                      ? `before:w-[110%] hover:before:left-[-10%] ${
                          location.pathname === route.path
                            ? "before:left-[-10%] text-sky-600"
                            : "before:left-[-120%]"
                        }`
                      : `before:w-[230%] hover:before:-left-full before:-left-[300%] ${
                          location.pathname === route.path
                            ? "before:-left-full text-sky-600"
                            : ""
                        }`
                  }`}
                >
                  <Link
                    className="flex gap-3 items-center z-20"
                    to={route.path}
                  >
                    <route.icon className="text-2xl flex-shrink-0 z-20" />
                    <p className="z-20">{openSidebar ? route.name : ""}</p>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
