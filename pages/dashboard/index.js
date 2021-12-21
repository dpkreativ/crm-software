import ContactCard from "components/ContactCard";
import Sidebar from "components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar active={1} />

      {/* Content */}
      <section>
        <div className="p-5">
          <div className="text-xs mb-2">
            Note: This is a demo. Do not store any real numbers on this app as
            it will be visible to everyone else. Thanks.
          </div>
          <div className="flex items-center space-x-5">
            <div className="p-2 border-2 border-primary-100 rounded-2xl w-96 hover:border-primary-200 hover:shadow">
              <input
                type="search"
                name="searchContact"
                id="searchContact"
                placeholder="Find connection"
                className="outline-none w-full"
              />
            </div>
            <div>
              <button className="p-2 bg-primary-100 rounded-2xl text-white shadow-lg hover:bg-primary-200 hover:shadow">
                New Connection
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
