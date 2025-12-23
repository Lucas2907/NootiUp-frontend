import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import { Routes, Route } from "react-router-dom"
import MainPage from "../MainPage/MainPage"
import MyProgress from "../MyProgress/MyProgress"
import Layout from "../Layout/Layout"
import MyProfile from "../MyProfile/MyProfile"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signin" element={<Main route="signin" />} />
        <Route path="/signup" element={<Main route="signup" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/my-progress" element={<MyProgress />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Route>
    </Routes>
  )
}

export default App
