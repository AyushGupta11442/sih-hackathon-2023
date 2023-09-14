import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Model from "../components/Model";
import AboutUs from "../components/Aboutus";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
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
