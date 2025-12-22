import Logo from "../Logo/Logo"
import RedirectButton from "../RedirectButton/RedirectButton"
import { Link } from "react-router-dom"


type HeaderProps = {
    route: "signin" | "signup"
}


function Header({ route }: HeaderProps) {

    const isSignin = route === "signin"

    return (
        <div className="header">
            <Logo />
            {isSignin ? (
                <>
                    <Link className="app-link" to={"/signup"}><RedirectButton text={"Registrar"} /></Link>
                </>
            ) : (
                <>
                    <Link className="app-link" to={"/signin"}><RedirectButton text={"Entrar"} /></Link>
                </>
            )}


        </div>

    )
}

export default Header