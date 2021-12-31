import Sidebar from "@/organisms/Sidebar";
import DashboardTemplate from "@/templates/DashboardTemplate";

const Home = () => {
  return (
    <DashboardTemplate sidebarActiveTab={4}>
      <div>Notes</div>
    </DashboardTemplate>
  );
};

export default Home;
