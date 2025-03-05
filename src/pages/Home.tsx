import Banner from "../components/banner/Banner";
import BundleAndSave from "../feature/bundle-and-save/BundleAndSave";
import HotAndNew from "../feature/hot-and-new/HotAndNew";
import TrendingProducts from "../feature/trending-products/TrendingProducts";
import FeaturedBrands from "../feature/featured-brands/FeaturedBrands";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <HotAndNew />
      <div className="flex items-center justify-center">
        <Banner />
      </div>
      <BundleAndSave />
      <FeaturedBrands />
      <TrendingProducts />
    </div>
  );
};

export default Home;
