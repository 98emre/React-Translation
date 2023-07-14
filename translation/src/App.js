import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./view/Login"
import Profile from "./view/Profile"
import Translation from "./view/Translation"


function App() {

  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={
            <>
              <h1>404 Page Not Found</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
