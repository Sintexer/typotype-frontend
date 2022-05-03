
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Main } from "./pages/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;