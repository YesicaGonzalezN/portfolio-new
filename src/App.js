import Nav from "./Components/Nav/Nav";
import "./App.css";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}



export default App;
