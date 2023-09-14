import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AboutImg from "../assets/About.png"
import Footer from "../components/Footer"
import AboutUs from "../components/Aboutus"

function About() {
    return (
        <>
        
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
            />
            
            <AboutUs />
        
           
        </>
    )
}

export default About;