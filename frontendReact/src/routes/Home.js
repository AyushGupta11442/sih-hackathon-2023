import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                title="From Field to Screen, Empowering Agriculture"
                text=""
                buttonText="Explore"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;