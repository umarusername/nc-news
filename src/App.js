import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <NavigationBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
