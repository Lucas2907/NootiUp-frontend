import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"
import threeDots from "../../assets/images/three-dots.png"

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
                <div className="modules__cards">
                    <img src={htmlIcon} alt="html icon example" className="modules__cards-image" />
                    <div className="modules__cards-about">
                        <h2 className="cards-about__title">HTML</h2>
                        <ul className="cards-about__list">
                            <li className="about__list-lesson">2 lições</li>
                            <li className="about__list-tasks">9 exercícios</li>
                        </ul>
                    </div>
                    <img src={threeDots} alt="" className="modules__cards-three-dots" />
                </div>
                <div className="modules__cards">
                    <img src={cssIcon} alt="css icon example" className="modules__cards-image" />
                    <div className="modules__cards-about">
                        <h2 className="cards-about__title">CSS</h2>
                        <ul className="cards-about__list">
                            <li className="about__list-lesson">4 lições</li>
                            <li className="about__list-tasks">5 exercícios</li>
                        </ul>
                    </div>
                    <img src={threeDots} alt="" className="modules__cards-three-dots" />
                </div>

            </div>
        </div>
    )
}

export default MainPage