import Sidebar from "@/organisms/Sidebar";

const DashboardTemplate = ({ sidebarActiveTab, children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar active={sidebarActiveTab} />

      {/* Content */}
      <section className="w-4/5 relative">{children}</section>
    </div>
  );
};

export default DashboardTemplate;
