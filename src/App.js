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
import ArticlesByTopic from "./components/ArticlesByTopic";
import IndividualArticle from "./components/IndividualArticle";
import ArticleComments from "./components/ArticleComments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <NavigationBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/topics/:topic" element={<ArticlesByTopic />} />
          <Route path={"/articles/:id"} element={<IndividualArticle />} />
          <Route
            path={"/articles/:id/:comments"}
            element={<ArticleComments />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
