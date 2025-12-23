import profileIcon from "../../assets/images/user.png"

type RedirectButtonProps = {
    text: string
    isLogged: boolean

}

function RedirectButton({ text, isLogged }: RedirectButtonProps) {
    return (
        <button className="redirect-button">
            <p className="redirect-button__button">{text}</p>
            {
                isLogged ? (
                    <img className="redirect-button__image" src={profileIcon} alt="esboço de um boneco roxo com cabeça sem face e com ombros representando um boneco de edição de perfil" />
                ) : ""
            }
        </button >
    )
}

export default RedirectButton