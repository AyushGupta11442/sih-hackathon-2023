import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Model from "../components/Model";
import AboutUs from "../components/Aboutus";
import HomePic from "../assets/homepic.avif";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomePic}
        title="Welcome to Smart Farming Hub."
        text="We offer a range of cutting-edge tools and features to help farmers 
        maximize their yield and increase productivity. From weather forecasting to 
        automated pest control, our platform is the ultimate solution for modern-day 
        agriculture. We aim to make farming more efficient, productive, and sustainable for everyone."
      />
      <AboutUs />
      <Model />
      <Footer />
    </>
  );
}

export default Home;
