import Home from "./pages/home";
import ReceipeDetails from "./pages/receipeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/details/:id" element={<ReceipeDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
