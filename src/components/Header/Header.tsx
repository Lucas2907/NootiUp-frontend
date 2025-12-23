import Logo from "../Logo/Logo"
import RedirectButton from "../RedirectButton/RedirectButton"
import { Link, useLocation } from "react-router-dom"

function Header() {
    const { pathname } = useLocation()

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
                <Link className="app-link" to={"/"}><a className="header__list-item">Página Inicial</a></Link>
                <Link className="app-link" to={"/my-progress"}><a className="header__list-item">Meu Progresso</a></Link>
                <Link to={"/my-profile"} className="app-link"><RedirectButton text={"Lucas"} isLogged={true} /></Link>
            </nav>
        </header>
    )
}

export default Header