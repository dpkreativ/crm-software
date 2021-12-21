import ContactCard from "components/ContactCard";
import { AddContact } from "components/Icons";
import Sidebar from "components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar active={1} />

      {/* Content */}
      <section className="w-4/5 relative h-full bg-red-200">
        <div className="p-5 sticky top-0 bg-white">
          <div className="text-xs mb-2">
            Note: This is a demo. Do not store any real numbers on this app as
            it will be visible to everyone else. Thanks.
          </div>
          <div className="flex items-center space-x-5">
            <div className="p-2 border-2 border-primary-100 rounded-xl w-96 hover:border-primary-200 hover:shadow">
              <input
                type="search"
                name="searchContact"
                id="searchContact"
                placeholder="Find connection"
                className="outline-none w-full bg-transparent"
              />
            </div>
            <div>
              <button className="p-2 bg-primary-100 rounded-xl text-white shadow-lg hover:bg-primary-200 hover:shadow flex space-x-2">
                <AddContact />
                <div className="font-semibold">New Connection</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className="p-5 w-1/3 bg-gray-100">
            <ContactCard />
          </div>
          <div className="p-5 w-2/3 bg-gray-300"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
