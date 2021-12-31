import Sidebar from "@/organisms/Sidebar";
import DashboardTemplate from "@/templates/DashboardTemplate";

const Home = () => {
  return (
    <DashboardTemplate sidebarActiveTab={5}>
      <div>The trash</div>
    </DashboardTemplate>
  );
};

export default Home;
