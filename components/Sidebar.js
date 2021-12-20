import { useState } from "react";
import { Calendar, HeartOutline, Note, Trash, UserCircle } from "./Icons";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="h-screen w-1/5 p-10 flex flex-col space-y-7">
      <div
        className={`${
          isActive === 1
            ? "shadow-md bg-primary-100 text-white font-semibold"
            : ""
        } flex space-x-3 p-2 rounded-xl hover:cursor-pointer hover:shadow`}
        onClick={() => setIsActive(1)}
      >
        <div>
          <UserCircle />
        </div>
        <div>Connections</div>
      </div>
      <div
        className={`${
          isActive === 2
            ? "shadow-md bg-primary-100 text-white font-semibold"
            : ""
        } flex space-x-3 p-2 rounded-xl hover:cursor-pointer hover:shadow`}
        onClick={() => setIsActive(2)}
      >
        <div>
          <HeartOutline />
        </div>
        <div>Favourites</div>
      </div>
      <div
        className={`${
          isActive === 3
            ? "shadow-md bg-primary-100 text-white font-semibold"
            : ""
        } flex space-x-3 p-2 rounded-xl hover:cursor-pointer hover:shadow`}
        onClick={() => setIsActive(3)}
      >
        <div>
          <Calendar />
        </div>
        <div>Calendar</div>
      </div>
      <div
        className={`${
          isActive === 4
            ? "shadow-md bg-primary-100 text-white font-semibold"
            : ""
        } flex space-x-3 p-2 rounded-xl hover:cursor-pointer hover:shadow`}
        onClick={() => setIsActive(4)}
      >
        <div>
          <Note />
        </div>
        <div>Notes</div>
      </div>
      <div
        className={`${
          isActive === 5
            ? "shadow-md bg-primary-100 text-white font-semibold"
            : ""
        } flex space-x-3 p-2 rounded-xl hover:cursor-pointer hover:shadow`}
        onClick={() => setIsActive(5)}
      >
        <div>
          <Trash />
        </div>
        <div>Trash</div>
      </div>
    </div>
  );
};

export default Sidebar;
