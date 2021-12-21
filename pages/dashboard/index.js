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
          Note: This is a demo. Do not store any real numbers on this app as it
          will be visible to everyone else. Thanks.
        </div>
        <div className="p-5">
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
