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
import FertilisationForm from "./routes/Services/FertilisationPrediction"
import WeedMonitoring from "./routes/Services/WeedMonitoring"
import FetchData from "./routes/News"
import CropForm from "./routes/Services/CropSelection"
import ChatBot from "./routes/ChatBot"
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="/" element={<Internallayout />}>
          <Route path="weatherforcasting" element={<WeatherApp />} />
          <Route path="irrigationpractices" element={<Irrigationpractices />} />
          <Route path="pestcontrol" element={<PestControl />} />
          <Route path="fertilisationdetection" element={<FertilisationForm />} />
          <Route path="weedmonitoring" element={<WeedMonitoring />} />
          <Route path="cropselection" element={<CropForm/>}/>
        </Route>
        <Route path="bot" element={<ChatBot/>}/>
        <Route path="news" element={<FetchData />}/>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}


// vdxcvxcvdf

export default App