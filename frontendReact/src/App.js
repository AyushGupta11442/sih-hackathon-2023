import "./styles.css"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"
import Weather from "./routes/weather/WeatherApp"

const App = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}


// vdxcvxcvdf

export default App