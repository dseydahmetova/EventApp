import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Dashboard from "./components/EventCard"
import About from "./pages/About"
import Nav from "./components/Nav"
import { stocks } from "./event-api"

function App() {
  return (
    <div className="App">
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
