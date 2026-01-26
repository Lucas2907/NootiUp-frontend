import { Link } from "react-router-dom";
import hidePassword from "../../assets/images/hide-password.png"


type MainProps = {
    route: "signin" | "signup"
}


function Main({ route }: MainProps) {

    const isSignin = route === "signin"

    return (
        <div className="main">
            <h1 className="main__title">{isSignin ? "Welcome Back!" : "Welcome to NootUp!"}</h1>
            <p className="main__description">
                {isSignin ? "Aprender é revigorante e ter você conosco novamente nos revigora da mesma forma" : "Seja bem vindo ao NootUp, onde seu aprendizado não tem limites"}
            </p>
            <form className="form">
                <div className="form__inputs">
                    <div className="form__field form__user">
                        <input className="form__input" type="text" placeholder="Username" />
                    </div>
                    <div className="form__field form__password">
                        <input className="form__input" type="text" placeholder="Password" />
                        <img
                            className="form__icon"
                            src={hidePassword}
                            alt="icone de senha Visivel"
                        />
                    </div>
                    {!isSignin && (
                        <div className="form__field form__password form__password-confirmation">
                            <input className="form__input" type="text" placeholder="Confirm Password" />
                            <img
                                className="form__icon"
                                src={hidePassword}
                                alt="icone de senha Visivel"
                            />
                        </div>
                    )}
                </div>
                {isSignin && (
                    <p className="form__link-password">Forgot Password?</p>)}
                <button className="form__submit">{isSignin ? "Login" : "Register"}</button>
            </form>
            <p className="main__link">
                {isSignin ? (
                    <Link className="app-link" to={"/signup"}>
                        Not a member?{" "}
                        <span className="main__link_redirect">Register Now</span>
                    </Link>
                ) : (
                    <Link className="app-link" to={"/signin"}>
                        A member?{" "}
                        <span className="main__link_redirect">Login Now</span>
                    </Link>
                )}
            </p>
        </div>
    );
}

export default Main;
