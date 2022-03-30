import './App.css';
import Sidebar from "./components/Sidebar";
import FirstScreen from "./components/FirstScreen";
import Popup from "./components/Popup";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar/>
        
        <div className="page">
          <main className="main">
            <Routes>
              <Route path="/" element={<FirstScreen/>}/>
            </Routes>
          </main>
        </div>
      </div>
      
      <Popup/>
    </div>
  );
}

export default App;
