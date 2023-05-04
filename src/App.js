import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { filmsList } from "./helpers/filmsList";
import FilmInfo from "./pages/FilmInfo";

// import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home filmsList={filmsList} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/filmInfo/:id"
              element={<FilmInfo filmsList={filmsList} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
