import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Media } from "./components/Media";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Media />
      <Contact />
    </div>
  );
}

export default App;
