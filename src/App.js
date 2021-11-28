import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    // Router -> BrowserRouter
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Switch -> Routes */}
      <Routes>
        {/* componet Home으로 가는 라우트 */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
