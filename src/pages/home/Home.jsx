import { useContext } from "react";
import Layout from "./../../components/layout/LayOut";
import myContext from "../../context/data/MyContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "./../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  const data = useContext(myContext);
  console.log(data);
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
