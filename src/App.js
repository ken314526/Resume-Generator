import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
