//generic imports
import profileImage from "../../assets/images/profile-example.jpg"
import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"

//import components
import CardsModule from "../CardsModule/CardsModule"
import InfoUser from "../InfoUser/InfoUser"

function MyProgress() {



    return (
        <div className="my-progress">
            <h1 className="my-progress__title">Meu Progresso</h1>
            <div className="my-progress__profile">
                <InfoUser profileImage={profileImage}></InfoUser>
                <div className="my-progress__profile-stats">
                    <div className="my-progress__profile-stats-item ">
                        <p className="my-progress__profile-stats-number">2</p>
                        <p className="my-progress__profile-stats-text">Favoritos</p>
                    </div>
                    <div className="my-progress__profile-stats-item ">
                        <p className="my-progress__profile-stats-number">5</p>
                        <p className="my-progress__profile-stats-text">A fazer</p>
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