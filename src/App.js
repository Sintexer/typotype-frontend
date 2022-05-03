
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contest } from "src/pages/contest/Contest";
import { Home } from "src/pages/home/Home";
import { Main } from "src/pages/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Home />} />
          <Route path="contest" element={<Contest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;