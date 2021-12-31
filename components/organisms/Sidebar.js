import { useState } from "react";
import Tab from "@/atoms/Tab";
import {
  Calendar,
  HeartOutline,
  Note,
  Trash,
  UserCircle,
} from "../atoms/Icons";

const Sidebar = ({ active = 1 }) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <section className="h-screen w-1/5 p-10 flex flex-col space-y-7">
      <Tab
        url="/dashboard"
        className={
          isActive === 1
            ? "shadow-md bg-primary-100 text-white font-semibold hover:bg-primary-200"
            : ""
        }
        text="Connections"
        icon={<UserCircle />}
      />

      <Tab
        url="/dashboard/favourites"
        className={
          isActive === 2
            ? "shadow-md bg-primary-100 text-white font-semibold hover:bg-primary-200"
            : ""
        }
        text="Favourites"
        icon={<HeartOutline />}
      />

      <Tab
        url="/dashboard/calendar"
        className={
          isActive === 3
            ? "shadow-md bg-primary-100 text-white font-semibold hover:bg-primary-200"
            : ""
        }
        text="Calendar"
        icon={<Calendar />}
      />

      <Tab
        url="/dashboard/notes"
        className={
          isActive === 4
            ? "shadow-md bg-primary-100 text-white font-semibold hover:bg-primary-200"
            : ""
        }
        text="Notes"
        icon={<Note />}
      />

      <Tab
        url="/dashboard/trash"
        className={
          isActive === 5
            ? "shadow-md bg-primary-100 text-white font-semibold hover:bg-primary-200"
            : ""
        }
        text="Trash"
        icon={<Trash />}
      />
    </section>
  );
};

export default Sidebar;
