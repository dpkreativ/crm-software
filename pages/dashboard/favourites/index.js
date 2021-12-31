import Sidebar from "@/organisms/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar active={2} />
      <div>Hello, I'm Favourites</div>
    </div>
  );
};

export default Home;
