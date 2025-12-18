import threeDots from "../../assets/images/three-dots.png"

type CardsModuleProps = {
    imageModule: string,
    name: string,
    lessons: number,
    tasks: number
}

function CardsModule({ imageModule, name, lessons, tasks }: CardsModuleProps) {
    return (
        <div className="modules__cards">
            <img src={imageModule} alt={name + "icon example"} className="modules__cards-image" />
            <div className="modules__cards-about">
                <h2 className="cards-about__title">{name}</h2>
                <ul className="cards-about__list">
                    <li className="about__list-lesson">{lessons} lessons</li>
                    <li className="about__list-tasks">{tasks} tasks</li>
                </ul>
            </div>
            <img src={threeDots} alt="" className="modules__cards-three-dots" />
        </div>
    )
}

export default CardsModule