import Logo from "../Logo/Logo"
import RedirectButton from "../RedirectButton/RedirectButton"
import { Link, useLocation, NavLink } from "react-router-dom"

function Header() {
    const { pathname } = useLocation()
    const customClassName = ({ isActive }: { isActive: boolean }) => "header__list-item app-link " + (isActive ? "header__list-item_active " : "")

    const isSignin = pathname === "/signin"
    const isSignup = pathname === "/signup"




    if (isSignin || isSignup) {
        return (
            <header className="header">
                <Logo />
                {isSignin && (
                    <Link to={"/signup"} className="app-link"><RedirectButton text={"Registrar"} isLogged={false} /></Link>
                )
                }
                {isSignup && (
                    <Link to={"/signin"} className="app-link"><RedirectButton text={"Entrar"} isLogged={false} /></Link>
                )
                }
            </header >
        )

    }
    return (
        <header className="header">
            <Logo />
            <nav className="header__list">
                <NavLink className={customClassName} to={"/"}>Página Inicial</NavLink>
                <NavLink className={customClassName} to={"/my-progress"}>Meu Progresso</NavLink>
                <NavLink className={customClassName} to={"/github-info"}>GitHub Info</NavLink>
                <NavLink to={"/my-profile"} className="app-link"><RedirectButton text={'User'} isLogged={true} /></NavLink>
            </nav >
        </header >
    )
}

export default Header