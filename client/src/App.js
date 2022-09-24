import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
