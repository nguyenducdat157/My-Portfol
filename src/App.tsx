import "./App.css";
import "./responsive.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { Favourite } from "./components/Favourite";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Favourite />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
