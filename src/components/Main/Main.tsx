import { Link, useNavigate } from "react-router-dom";
import hidePassword from "../../assets/images/hide-password.png"



type MainProps = {
    route: "signin" | "signup"
}

function Main({ route }: MainProps) {

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        return isSignin ? navigate("/", { replace: true }) : navigate("/signin")

    };

    const isSignin = route === "signin"

    return (
        <div className="main">
            <h1 className="main__title">{isSignin ? "Welcome Back!" : "Welcome to NootUp!"}</h1>
            <p className="main__description">
                {isSignin ? "Aprender é revigorante e ter você conosco novamente nos revigora da mesma forma" : "Seja bem vindo ao NootUp, onde seu aprendizado não tem limites"}
            </p>
            <form className="form">
                <div className="main__form-inputs">
                    <div className="main__form-field main__form-email">
                        <input className="main__form-input" type="email" placeholder="E-mail" />
                    </div>
                    <div className="main__form-field main__form-password">
                        <input className="main__form-input" type="password" placeholder="Password" />
                        <img
                            className="main__form-icon"
                            src={hidePassword}
                            alt="a password hidden icon"
                        />
                    </div>
                    {!isSignin && (
                        <div className="main__form-field main__form-password main__form-password-confirmation">
                            <input className="main__form-input" type="password" placeholder="Confirm Password" />
                            <img
                                className="main__form-icon"
                                src={hidePassword}
                                alt="a password visible icon"
                            />
                        </div>
                    )}
                </div>
                {isSignin && (
                    <p className="main__form-link-password">Forgot Password?</p>)}
                <button onClick={handleSubmit} className="main__form-submit">{isSignin ? "Login" : "Register"}</button>
            </form>
            <p className="main__link">
                {isSignin ? (
                    <Link className="app-link" to={"/signup"}>
                        Not a member?{" "}
                        <span className="main__link-redirect">Register Now</span>
                    </Link>
                ) : (
                    <Link className="app-link" to={"/signin"}>
                        A member?{" "}
                        <span className="main__link-redirect">Login Now</span>
                    </Link>
                )}
            </p>
        </div>
    );
}

export default Main;
