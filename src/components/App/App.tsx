import Header from "../Header/Header"
// import Main from "../Main/Main"
//import MainPage from "../MainPage/MainPage"
import MyProgress from "../MyProgress/MyProgress"
function App() {
  return (
    <div className="page">
      <Header text="Register" />
      {/* <Main title="Welcome Back!" description="Aprender é revigorante e ter você aqui novamente nos revigora mais ainda" route="signin" /> */}
      <MyProgress />
    </div>
  )
}

export default App
