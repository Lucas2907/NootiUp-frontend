import Logo from "../Logo/Logo"
import RedirectButton from "../RedirectButton/RedirectButton"
import { Link, useLocation, NavLink } from "react-router-dom"
import { useState } from "react"
import optionsIcon from "../../assets/images/three-lines.png"

function Header() {
    const { pathname } = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const customClassName = ({ isActive }: { isActive: boolean }) =>
        "header__list-item app-link " + (isActive ? "header__list-item_active " : "")

    const customClassNameMobile = ({ isActive }: { isActive: boolean }) =>
        "header__list-item-mobile app-link " + (isActive ? "header__list-item-mobile_active " : "")

    const isSignin = pathname === "/signin"
    const isSignup = pathname === "/signup"

    if (isSignin || isSignup) {
        return (
            <header className="header">
                <Logo isBlack={true} />
                {isSignin && (
                    <Link to="/signup" className="app-link">
                        <RedirectButton text="Registrar" isLogged={false} />
                    </Link>
                )}
                {isSignup && (
                    <Link to="/signin" className="app-link">
                        <RedirectButton text="Entrar" isLogged={false} />
                    </Link>
                )}
            </header>
        )
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="header">
            <Link className="app-link" to="/">
                <Logo isBlack={true} />
            </Link>


            <nav className="header__list">
                <NavLink className={customClassName} to="/">
                    Página Inicial
                </NavLink>
                <NavLink className={customClassName} to="/my-progress">
                    Meu Progresso
                </NavLink>
                <NavLink className={customClassName} to="/github-info">
                    GitHub Info
                </NavLink>
            </nav>
            <NavLink
                to="/my-profile"
                className="app-link"
            >
                <RedirectButton text="User" isLogged={true} />
            </NavLink>

            <div className="header__mobile">
                <img
                    className="header-options"
                    src={optionsIcon}
                    alt="icon to show options inside aplication"
                    onClick={toggleMenu}
                />
            </div>

            {isMenuOpen && (
                <nav className="header__mobile-menu">
                    <NavLink
                        className={customClassNameMobile}
                        to="/"
                        onClick={toggleMenu}
                    >
                        Página Inicial
                    </NavLink>
                    <NavLink
                        className={customClassNameMobile}
                        to="/my-progress"
                        onClick={toggleMenu}
                    >
                        Meu Progresso
                    </NavLink>
                    <NavLink
                        className={customClassNameMobile}
                        to="/github-info"
                        onClick={toggleMenu}
                    >
                        GitHub Info
                    </NavLink>
                </nav>

            )}
        </header>
    )
}

export default Header
