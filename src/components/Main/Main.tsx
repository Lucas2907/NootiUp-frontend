import { Link, useNavigate } from "react-router-dom";
import hidenPassword from "../../assets/images/password-hidden.svg"
import visiblePassword from "../../assets/images/password-visible.svg"
import { useState } from "react";



type MainProps = {
    route: "signin" | "signup"
}

function Main({ route }: MainProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return isSignin ? navigate("/", { replace: true }) : navigate("/signin")

    };

    const isSignin = route === "signin"

    const togglePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    return (
        <div className="main">
            <h1 className="main__title">{isSignin ? "Welcome Back!" : "Welcome to NootUp!"}</h1>
            <p className="main__description">
                {isSignin ? "Aprender é revigorante e ter você conosco novamente nos revigora da mesma forma" : "Seja bem vindo ao NootUp, onde seu aprendizado não tem limites"}
            </p>
            <form className="main__form" onSubmit={handleSubmit}>
                <div className="main__form-inputs">
                    <div>
                        <label className="main__form-label" htmlFor="email"> E-mail </label>
                        <div className="main__form-field main__form-email">


                            <input placeholder="julian@gmail.com" required id="email" className="main__form-input" type="email" />

                        </div>
                    </div>
                    <div>
                        <label className="main__form-label" htmlFor="password" >Password</label>
                        <div className="main__form-field main__form-password">


                            <input placeholder="julian123" required id="password" className="main__form-input" type={isPasswordVisible ? "text" : "password"} />

                            <button
                                type="button"
                                className="main__form-icon-button"
                                aria-pressed={isPasswordVisible}
                                aria-label={isPasswordVisible ? visiblePassword : hidenPassword}
                                onClick={togglePasswordVisible}
                            >
                                <img
                                    className="main__form-icon"
                                    src={isPasswordVisible ? visiblePassword : hidenPassword}
                                    alt={isPasswordVisible ? "visible password icon" : "hidde password icon"}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                    {!isSignin && (
                        <div>
                            <label className="main__form-label" htmlFor="confirm-password">Confirm Password</label>
                            <div className="main__form-field main__form-password main__form-password-confirmation">

                                <input placeholder="julian123" required id="confirm-password" className="main__form-input" type="password" />
                            </div>
                        </div>
                    )}
                    {isSignin && (
                        <p className="main__form-link-password">Forgot Password?</p>)}
                    <button type="submit" className="main__form-submit">{isSignin ? "Login" : "Register"}</button>
                </div>
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
