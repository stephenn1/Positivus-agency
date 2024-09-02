import "./App.css";
import CaseStady from "./components/CaseStady";
import Contacts from "./components/Contacts";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import { WorkingProcess } from "./components/WorkingProcess";

function App() {
  return (
    <div className="font-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStady />
      <WorkingProcess />
      <Team />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
