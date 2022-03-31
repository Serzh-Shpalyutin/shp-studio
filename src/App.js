import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FirstScreen from "./pages/FirstScreen";
import ServicesPage from "./pages/ServicesPage";
import CasesPage from "./pages/CasesPage";
import Popup from "./components/Popup";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar/>
        
        <div className="page">
          <main className="main">
            <Routes>
              <Route path="/" element={<FirstScreen/>}/>
              <Route path="/services/" element={<ServicesPage/>}/>
              <Route path="/cases/" element={<CasesPage/>}/>
            </Routes>
          </main>
        </div>
      </div>
      
      <Popup/>
    </div>
  );
}

export default App;
