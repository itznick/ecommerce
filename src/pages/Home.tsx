import Banner from "../components/banner/Banner";
import CategoryCard from "../feature/category-card/CategoryCard";
import NewArrival from "../feature/hot-and-new/HotAndNew";

const Home = () => {
  return (
      <div className="flex flex-col gap-y-8">
        <NewArrival />
        <div className="flex items-center justify-center">
          <Banner />
        </div>
        <CategoryCard />
      </div>
  );
};

export default Home;
