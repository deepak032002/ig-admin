import { Card } from "@nextui-org/react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar: React.FC<{
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setSidebarOpen }) => {
  return (
    <div className="size-full">
      <Card className="h-full py-2 px-4 flex items-center justify-between flex-row">
        <div>
          <button
            className="p-3 rounded-full hover:bg-neutral-100 cursor-pointer"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <HiMenuAlt2 size={22} />
          </button>
        </div>
        <div>b</div>
      </Card>
    </div>
  );
};

export default Navbar;
