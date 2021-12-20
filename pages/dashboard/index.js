import Sidebar from "components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar active={1} />
      <div>Hello, I'm the Dashboard.</div>
    </div>
  );
};

export default Dashboard;
