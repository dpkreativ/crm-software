import Sidebar from "@/organisms/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar active={3} />
      <div>Hello, I'm Calendar</div>
    </div>
  );
};

export default Home;
