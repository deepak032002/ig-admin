import { Scrollbars } from "react-custom-scrollbars-2";
// import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/design-system/organisms/navbar";
import Sidebar from "@/design-system/organisms/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { theme } = useTheme();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className={`relative flex h-screen overflow-hidden p-4 gap-4`}>
      <motion.div
        animate={openSidebar ? "open" : "closed"}
        className="w-[300px] h-full"
        variants={{
          open: {
            width: 300,
          },
          closed: {
            width: 60,
          },
        }}
      >
        <Sidebar openSidebar={openSidebar} />
      </motion.div>
      <div className="flex flex-col h-full flex-1">
        <div className="h-[80px]">
          <Navbar setSidebarOpen={setOpenSidebar} />
        </div>
        <main className="h-[calc(100vh-80px)] w-full">
          <Scrollbars
            autoHide
            autoHideDuration={600}
            height={"100%"}
            width={"100%"}
          >
            {children}
          </Scrollbars>
        </main>
      </div>
    </div>
  );
}
