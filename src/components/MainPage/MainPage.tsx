//generic imports
import htmlIcon from "../../assets/images/html-icon.png"
import cssIcon from "../../assets/images/css-icon.png"

//import components
import CardsModule from "../CardsModule/CardsModule"
import { useCurrentUser } from "../../contexts/userContext"


const modules = [
    { id: "html", imageModule: htmlIcon, name: "HTML", lessons: 2, tasks: 9 },
    { id: "css", imageModule: cssIcon, name: "CSS", lessons: 4, tasks: 5 },
    { id: "algorithm", imageModule: cssIcon, name: "Math", lessons: 1, tasks: 8 },
    { id: "math", imageModule: cssIcon, name: "Algorithm", lessons: 5, tasks: 3 }
]

function MainPage() {
    const { username } = useCurrentUser()

    return (
        <div className="main-page">
            <p className="main-page__presentation">Hi {username}</p>
            <h1 className="main-page__title">Escolha um Módulo</h1>
            <div className="main-page__modules">
                <div className="main-page__modules-texts">
                    <h3 className="main-page__modules-texts-title">Programação</h3>
                    <p className="main-page__modules-texts-text">view all</p>
                </div>
                <div className="main-page__modules-cards">
                    {modules.map((module) => (
                        <CardsModule
                            key={module.id}
                            imageModule={module.imageModule}
                            name={module.name}
                            lessons={module.lessons}
                            tasks={module.tasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainPage