import hidePassword from "../../assets/images/Hide-password.png";

function Main() {
    return (
        <div className="main">
            <h1 className="main__title">Welcome Back!</h1>
            <p className="main__description">
                Aprender é revigorante e ter você aqui novamente nos revigora mais ainda
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
                </div>
                <p className="form__link-password">Forgot Password?</p>
                <button className="form__submit">Login</button>
            </form>
            <p className="main__link">
                Not a member? <span className="main__link_redirect">Register now</span>
            </p>
        </div>
    );
}

export default Main;
