import "./styles.css"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Services/Service"
import Contact from "./routes/Contact"
import WeatherApp from "./routes/Services/weather/WeatherApp"
import Irrigationpractices from "./routes/Services/Irrigationpractices"
import Internallayout from "./routes/internallayout"
import PestControl from "./routes/Services/PestControl"
import LivestockMonitoring from "./routes/Services/LivestockMonitoring"
import NutritionDetection from "./routes/Services/NutritionDetection"
import WeedMonitoring from "./routes/Services/WeedMonitoring"

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Internallayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="weatherforcasting" element={<WeatherApp />} />
          <Route path="irrigationpractices" element={<Irrigationpractices />} />
          <Route path="pestcontrol" element={<PestControl />} />
          <Route path="livestockmonitoring" element={<LivestockMonitoring />} />
          <Route path="nutritiondetection" element={<NutritionDetection/>} />
          <Route path="weedmonitoring" element={<WeedMonitoring/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}


// vdxcvxcvdf

export default App