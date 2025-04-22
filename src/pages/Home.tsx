import Banner from "../components/banner/Banner";
import BundleAndSave from "../feature/bundle-and-save/BundleAndSave";
import HotAndNew from "../feature/hot-and-new/HotAndNew";
import FeaturedBrands from "../feature/featured-brands/FeaturedBrands";
import TrendingProducts from "../feature/trending-products/TrendingProducts";
import Footer from "../components/footer/Footer";
import ProductDetailModal from "../components/product/product-detail-modal/ProductDetailModal";

const Home = () => {
  return (
    <div className="flex flex-col justify-between gap-y-4">
      <div>
        <Banner />
      </div>

      <section>
        <HotAndNew limit={4} />
      </section>

      <ProductDetailModal />

      <section>
        <BundleAndSave />
      </section>

      <section>
        <FeaturedBrands />
      </section>

      <section>
        <TrendingProducts />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
