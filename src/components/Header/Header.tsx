import Logo from "../Logo/Logo"
import RedirectButton from "../RedirectButton/RedirectButton"



function Header({ text }: { text: string }) {
    return (
        <div className="header">
            <Logo />
            <RedirectButton text={text} />
        </div>

    )
}

export default Header