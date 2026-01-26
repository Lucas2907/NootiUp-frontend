import Main from "../Main/Main"
import { Routes, Route } from "react-router-dom"
import MainPage from "../MainPage/MainPage"
import MyProgress from "../MyProgress/MyProgress"
import Layout from "../Layout/Layout"
import MyProfile from "../MyProfile/MyProfile"
import Preloader from "../Preloader/Preloader"
import GitHubInfo from "../GitHubInfo/GitHubInfo"
import { useState } from "react"

function App() {

  const [gitName, setGitName] = useState('');

  function handleGitName(name: string) {
    setGitName(name)
  }



  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/preloader" element={<Preloader />} />
        <Route path="/signin" element={<Main route="signin" />} />
        <Route path="/signup" element={<Main route="signup" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/my-progress" element={<MyProgress />} />
        <Route path="/my-profile" element={<MyProfile onSendGitName={handleGitName} />} />
        <Route path="/github-info" element={<GitHubInfo onData={gitName} />} />
      </Route>
    </Routes>
  )
}

export default App
