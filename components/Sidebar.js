import { Calendar, HeartOutline, Note, Trash, UserCircle } from "./Icons";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/5 p-10 flex flex-col space-y-10">
      <div className="text-primary-100 flex space-x-3">
        <div>
          <UserCircle />
        </div>
        <div>Connections</div>
      </div>
      <div className="text-primary-100 flex space-x-3">
        <div>
          <HeartOutline />
        </div>
        <div>Favourites</div>
      </div>
      <div className="text-primary-100 flex space-x-3">
        <div>
          <Calendar />
        </div>
        <div>Calendar</div>
      </div>
      <div className="text-primary-100 flex space-x-3">
        <div>
          <Note />
        </div>
        <div>Notes</div>
      </div>
      <div className="text-primary-100 flex space-x-3">
        <div>
          <Trash />
        </div>
        <div>Trash</div>
      </div>
    </div>
  );
};

export default Sidebar;
