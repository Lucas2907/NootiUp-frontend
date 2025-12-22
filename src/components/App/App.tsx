import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="page">

      <Routes>
        <Route path="/signin" element={
          <>
            <Header route="signin" />
            <Main route="signin" />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Header route="signup" />
            <Main route="signup" />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
