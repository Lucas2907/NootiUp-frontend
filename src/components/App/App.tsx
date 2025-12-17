import Header from "../Header/Header"
// import Main from "../Main/Main"
import MainPage from "../MainPage/MainPage"
function App() {
  return (
    <div className="page">
      <Header text="Register" />
      {/* <Main title="Welcome Back!" description="Aprender é revigorante e ter você aqui novamente nos revigora mais ainda" route="signin" /> */}
      <MainPage />
    </div>
  )
}

export default App
