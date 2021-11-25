import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import TopContentComponent from "./components/TopContentComponent";
import FooterComponent from "./components/FooterComponent";
import EventComponent from "./components/EventComponent";

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent></HeaderComponent> */}
      <TopContentComponent></TopContentComponent>
      <EventComponent></EventComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
