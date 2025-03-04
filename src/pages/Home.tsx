import Banner from "../components/banner/Banner";
import NewArrival from "../feature/hot-and-new/HotAndNew";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Banner />
      </div>
      <div className="flex flex-col">
        <NewArrival />
      </div>
    </div>
  );
};

export default Home;
