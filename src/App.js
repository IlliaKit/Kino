import React from "react";
import Header from "./components/Header";
import SliderComponent from "./components/SliderComponent";

// import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SliderComponent />
      </div>
    );
  }
}
export default App;
