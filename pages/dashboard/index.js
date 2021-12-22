import ContactCard from "components/ContactCard";
import ContactDetails from "components/ContactDetails";
import { AddContact } from "components/Icons";
import Sidebar from "components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar active={1} />

      {/* Content */}
      <section className="w-4/5 relative flex">
        <div className="h-screen w-1/3 overflow-y-scroll">
          <div className="p-5 sticky top-0 z-10 shadow-sm bg-white">
            <div className="flex items-center space-x-2">
              <div className="text-xs">
                Note: This is a demo. Any numbers stored on this app will be
                visible to everyone else.
              </div>
              <div>
                <button className="p-2 bg-primary-100 rounded-xl text-white shadow-lg hover:bg-primary-200 hover:shadow flex space-x-2">
                  <AddContact />
                  <div className="font-semibold">New</div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mx-5 p-2 border-2 border-primary-100 rounded-xl hover:border-primary-200 hover:shadow">
              <input
                type="search"
                name="searchContact"
                id="searchContact"
                placeholder="Find connection"
                className="outline-none w-full bg-transparent"
              />
            </div>
            <ContactCard favourite={true} />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </div>

        <div className="h-screen w-2/3 p-5 overflow-y-scroll">
          <ContactDetails />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
