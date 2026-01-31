//generic imports
import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"

//import components
import CardsModule from "../CardsModule/CardsModule"

function MainPage() {
    return (
        <div className="main-page">
            <p className="main-page__presentation">Hi User</p>
            <h1 className="main-page__title">Escolha um Módulo</h1>
            <div className="main-page__modules">
                <div className="main-page__modules-texts">
                    <h3 className="main-page__modules-texts-title">Programação</h3>
                    <p className="main-page__modules-texts-text">view all</p>
                </div>
                <div className="main-page__modules-cards">
                    <CardsModule imageModule={htmlIcon} name="HTML" lessons={2} tasks={9} />
                    <CardsModule imageModule={cssIcon} name="CSS" lessons={4} tasks={5} />
                    <CardsModule imageModule={cssIcon} name="Math" lessons={2} tasks={8} />
                </div>
            </div>
        </div>
    )
}

export default MainPage