import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Portfolio></Portfolio>
      {/* <Resume></Resume> */}
    </div>
  );
}

export default App;
