import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <NavigationBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
