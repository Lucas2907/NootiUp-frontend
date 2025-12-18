//generic imports

import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"

//import components

import CardsModule from "../CardsModule/CardsModule"

function MainPage() {
    return (
        <div className="main-page">
            <p className="main-page__presentation">Hi Lucas</p>
            <h1 className="main-page__title">Escolha um Módulo</h1>
            <div className="modules">
                <div className="modules__texts">
                    <h3 className="modules__texts-title">Programação</h3>
                    <p className="modules__texts-text">view all</p>
                </div>
                <CardsModule imageModule={htmlIcon} name="HTML" lessons={2} tasks={9} />
                <CardsModule imageModule={cssIcon} name="CSS" lessons={4} tasks={5} />
            </div>
        </div>
    )
}

export default MainPage