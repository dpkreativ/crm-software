import Sidebar from "components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar active={4} />
      <div>Hello, I'm Notes</div>
    </div>
  );
};

export default Home;
