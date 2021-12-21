import Sidebar from "components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar active={1} />

      {/* Content */}
      <section>
        <div>
          Note: This is a demo. Do not store any real numbers on this app as it
          will be visible to everyone else. Thanks.
        </div>
        <div>All available contacts</div>
      </section>
    </div>
  );
};

export default Dashboard;
