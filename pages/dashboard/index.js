import DashboardTemplate from "@/templates/DashboardTemplate";
import ContactDetails from "components/ContactDetails";
import { AddContact } from "@/atoms/Icons";
import Search from "@/atoms/Search";
import Button from "@/atoms/Button";
import NoteMessage from "@/atoms/NoteMessage";
import ContactList from "@/organisms/ContactList";

const Dashboard = () => {
  return (
    <DashboardTemplate sidebarActiveTab={1}>
      <div className="w-full flex">
        {/* Contact List Section */}
        <div className="h-screen w-1/3 overflow-y-scroll">
          {/* Top */}
          <div className="p-5 sticky top-0 z-10 shadow-sm bg-white">
            <div className="flex items-center space-x-2">
              <NoteMessage />
              <div>
                <Button icon={<AddContact />} text="New" />
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="py-5">
            <Search
              searchName="searchContact"
              searchId="searchContact"
              placeholder="Find connection"
            />

            <ContactList />
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="h-screen w-2/3 overflow-y-scroll">
          <ContactDetails />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default Dashboard;
