import Main from "../Main/Main"
import { Routes, Route } from "react-router-dom"
import MainPage from "../MainPage/MainPage"
import MyProgress from "../MyProgress/MyProgress"
import Layout from "../Layout/Layout"
import MyProfile from "../MyProfile/MyProfile"
import Preloader from "../Preloader/Preloader"
import GitHubInfo from "../GitHubInfo/GitHubInfo"
import { useState } from "react"
import CurrentUserContext from "../../contexts/userContext";
import type { CurrentUserContextType } from "../../contexts/userContext";

// import GitHubAuthPage from "../GitHubAuthPage/GitHubAuthPage"(BACKEND)

function App() {

  const [user, setUser] = useState<CurrentUserContextType>({
    username: "Lucas",
    profession: "Desenvolvedor web",
  })

  return (
    <CurrentUserContext.Provider value={{
      ...user, setUser
    }}>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/preloader" element={<Preloader />} />
          <Route path="/signin" element={<Main route="signin" />} />
          <Route path="/signup" element={<Main route="signup" />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/my-progress" element={<MyProgress />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/github-info" element={<GitHubInfo />} />
          {/* <Route path="/github-auth" element={<GitHubAuthPage />} /> */}
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  )
}

export default App
