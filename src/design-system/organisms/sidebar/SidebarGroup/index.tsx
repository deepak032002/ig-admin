import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import classNames from "clsx";
import { Link, useLocation } from "react-router-dom";

import { Route, RouteWithChild } from "../route";

const SidebarGroup: React.FC<{
  route: Route & RouteWithChild;
  openSidebar: boolean;
}> = ({ route, openSidebar }) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div>
      <button
        className={`relative py-4 flex items-center cursor-pointer text-neutral-600 w-full justify-between before:absolute before:z-[1]  before:duration-100 before:top-0 before:h-full before:bg-sky-100 before:rounded-e-3xl hover:text-sky-600 ${openSidebar ? "before:w-[110%] before:left-[-120%] hover:before:left-[-10%]" : "before:w-[230%] hover:before:-left-full before:-left-[300%]"} ${
          location.pathname === route.path ? "before:left-0" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-3 items-center z-20">
          <route.icon className="text-2xl flex-shrink-0" />
          {openSidebar ? route.name : ""}
        </div>
        {openSidebar && (
          <div className="z-20">
            <BiChevronRight
              className={classNames({
                "text-2xl duration-150": true,
                "rotate-90": open,
              })}
            />
          </div>
        )}
      </button>
      <motion.ul
        animate={open && openSidebar ? "open" : "closed"}
        style={{ pointerEvents: open ? "auto" : "none" }}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            visibility: "visible",
          },
          closed: { height: 0, opacity: 0, visibility: "hidden" },
        }}
      >
        {route.child.map((child, index) => {
          return (
            <motion.li
              key={index}
              className="ps-10 flex gap-2 items-center py-1 group"
            >
              <Link
                className="flex gap-2 items-center cursor-pointer"
                to={`${route.path}/${child.path}`}
              >
                <div className="w-1 h-1 rounded-full bg-neutral-500 group-hover:bg-sky-400" />
                {child.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default SidebarGroup;
