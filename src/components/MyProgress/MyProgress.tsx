//generic imports
import profileImage from "../../assets/images/profile-example.jpg"
import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"

//import components
import CardsModule from "../CardsModule/CardsModule"

function MyProgress() {
    return (
        <div className="my-progress">
            <h1 className="my-progress__title">Meu Progresso</h1>
            <div className="my-progress__profile">
                <img className="my-progress__profile-image" src={profileImage} alt="example perfil image" />
                <h4 className="my-progress__profile-title">Lucas</h4>
                <p className="my-progress__profile-about">Web Developer</p>
                <div className="my-progress__profile-stats">
                    <div className="my-progress__profile-stats-item ">
                        <p className="my-progress__profile-stats-number">2</p>
                        <p className="my-progress__profile-stats-text">Favoritos</p>
                    </div>
                    <div className="my-progress__profile-stats-item ">
                        <p className="my-progress__profile-stats-number">5</p>
                        <p className="my-progress__profile-stats-text">Em andamento</p>
                    </div>
                    <div className="my-progress__profile-stats-item ">
                        <p className="my-progress__profile-stats-number">1</p>
                        <p className="my-progress__profile-stats-text">Concluídos</p>
                    </div>
                </div>
            </div>
            <h2 className="my-progress__recent">Recentes</h2>
            <div className="my-progress__recent-items">
                <CardsModule imageModule={htmlIcon} name="HTML" lessons={2} tasks={9} />
                <CardsModule imageModule={cssIcon} name="CSS" lessons={4} tasks={5} />
            </div>
        </div>
    )
}

export default MyProgress