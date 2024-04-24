import { useContext } from "react";
import Layout from "./../../components/layout/LayOut";
import myContext from "../../context/data/MyContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";

const Home = () => {
  const data = useContext(myContext);
  console.log(data);
  return (
    <Layout>
      <HeroSection />
      <Filter />
    </Layout>
  );
};

export default Home;
