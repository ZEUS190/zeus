import Advantage from "./components/Advantage";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <HeroSection/>
          <Advantage/>
          <Product/>
          <Team/>
          <FAQ/>
          <Footer/>
    </div>
  );
}

export default App;
