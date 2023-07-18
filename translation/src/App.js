import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/Login";
import Profile from "./view/Profile";
import Translation from "./view/Translation";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/*"
            element={
              <>
                <h1>404 Page Not Found</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
