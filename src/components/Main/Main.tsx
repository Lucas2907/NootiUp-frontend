import hidePassword from "../../assets/images/Hide-password.png";

type MainProps = {
    title: string,
    description: string,
    route: "signin" | "signup"
}

function Main({ title, description, route }: MainProps) {

    const isSignin = route === "signin"

    return (
        <div className="main">
            <h1 className="main__title">{title}</h1>
            <p className="main__description">
                {description}
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
                    <>
                        Not a member?{" "}
                        <span className="main__link_redirect">Register Now</span>
                    </>
                ) : (
                    <>
                        A member?{" "}
                        <span className="main__link_redirect">Login Now</span>
                    </>
                )}
            </p>
        </div>
    );
}

export default Main;
