import Link from "next/link";
import { useState } from "react";
import { Calendar, HeartOutline, Note, Trash, UserCircle } from "./Icons";

const Sidebar = ({ active = 1 }) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <section className="h-screen w-1/5 p-10 flex flex-col space-y-7">
      <Link href="/dashboard" passHref>
        <a>
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
        </a>
      </Link>
      <Link href="/dashboard/favourites" passHref>
        <a>
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
        </a>
      </Link>
      <Link href="/dashboard/calendar" passHref>
        <a>
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
        </a>
      </Link>
      <Link href="/dashboard/notes" passHref>
        <a>
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
        </a>
      </Link>
      <Link href="/dashboard/trash" passHref>
        <a>
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
        </a>
      </Link>
    </section>
  );
};

export default Sidebar;
