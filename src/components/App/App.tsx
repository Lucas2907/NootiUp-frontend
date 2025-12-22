import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

function App() {
  return (
    <div className="page">
      <Header text="Register" />
      <Routes>
        <Route path="/signin" element={<Main route="signin" />} />
        <Route path="/signup" element={<Main route="signup" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
