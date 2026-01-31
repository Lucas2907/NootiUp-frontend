import threeDots from "../../assets/images/three-dots.png"

type CardsModuleProps = {
    imageModule: string,
    name: string,
    lessons: number,
    tasks: number
}

function CardsModule({ imageModule, name, lessons, tasks }: CardsModuleProps) {
    return (

        <div className="modules-card">
            <img src={imageModule} alt={name + "icon example"} className="modules-card__image" />
            <div className="modules-card__about">
                <h2 className="modules-card__title">{name}</h2>
                <ul className="modules-card__list">
                    <li className="modules-card__lesson">{lessons} lessons</li>
                    <li className="modules-card__tasks">{tasks} tasks</li>
                </ul>
            </div>
            <img src={threeDots} alt="three Dots icon" className="modules-card__icon" />
        </div>
    )
}

export default CardsModule