import Sidebar from "components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar active={5} />
      <div>Hello, I'm Trash</div>
    </div>
  );
};

export default Home;
