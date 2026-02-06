import { Link, useNavigate } from "react-router-dom";
import hidenPassword from "../../assets/images/password-hidden.svg"
import visiblePassword from "../../assets/images/password-visible.svg"
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form"



type MainProps = {
    route: "signin" | "signup"
}

type FormValues = {
    email: string
    password: string
    confirmPassword?: string
}

function Main({ route }: MainProps) {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false)

    const navigate = useNavigate()

    const isSignin = route === "signin"

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        mode: "onChange",
        reValidateMode: "onChange"
    })

    const { register, handleSubmit, formState, control } = form
    const { errors, isValid } = formState

    const watchedPassword = useWatch({ control, name: "password" })

    const onSubmit = (data: FormValues) => {
        if (isSignin) {
            navigate("/", { replace: true })
        } else {
            navigate("/signin")
            form.reset()
        }
    }

    const togglePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisible = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };


    return (
        <div className="main">
            <h1 className="main__title">{isSignin ? "Welcome Back!" : "Welcome to NootUp!"}</h1>
            <p className="main__description">
                {isSignin ? "Aprender é revigorante e ter você conosco novamente nos revigora da mesma forma" : "Seja bem vindo ao NootUp, onde seu aprendizado não tem limites"}
            </p>
            <form className="main__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="main__form-inputs">
                    <div>
                        <label className={`main__form-label ${errors.email?.message ? "main__form-label--error" : ""}`} htmlFor="email"> E-mail </label>
                        <div className={`main__form-field main__form-password main__form-password-confirmation ${errors.email?.message ? "main__form-field--error" : ""}`}>
                            <input
                                minLength={6}
                                maxLength={40}
                                placeholder="julian@gmail.com"
                                id="email"
                                className="main__form-input"
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Insira um e-mail"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Mínimo de 6 caracteres"
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "Máximo de 40 caracteres"
                                    },
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "E-mail inválido"
                                    }
                                })}
                            />

                        </div>
                        <p className={`main__form-input-error ${errors.email?.message ? "main__form-input-error--visible" : ""}`}>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className={`main__form-label ${errors.password?.message ? "main__form-label--error" : ""}`} htmlFor="Senha" >Senha</label>
                        <div className={`main__form-field main__form-password main__form-password-confirmation ${errors.password?.message ? "main__form-field--error" : ""}`}>


                            <input
                                maxLength={30}
                                minLength={6}
                                placeholder="julian123"
                                id="password"
                                className="main__form-input"
                                type={isPasswordVisible ? "text" : "password"}
                                {...register("password", {
                                    required: { value: true, message: "Insira uma senha" },
                                    minLength: {
                                        value: 6,
                                        message: "Mínimo de 6 caracteres"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Máximo de 30 caracteres"
                                    }
                                })}
                            />

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
                        <p className={`main__form-input-error ${errors.password?.message ? "main__form-input-error--visible" : ""}`}>{errors.password?.message}</p>
                    </div>
                    {!isSignin && (
                        <div>
                            <label className={`main__form-label ${errors.confirmPassword?.message ? "main__form-label--error" : ""}`} htmlFor="confirm-password">Confirmar Senha</label>
                            <div className={`main__form-field main__form-password main__form-password-confirmation ${errors.confirmPassword?.message ? "main__form-field--error" : ""}`}>

                                <input
                                    minLength={6}
                                    maxLength={30}
                                    placeholder="julian123"
                                    id="confirm-password"
                                    className="main__form-input"
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: "Confirme sua senha"
                                        },
                                        validate: (value) =>
                                            value === watchedPassword || "As senhas não coincidem"
                                    })}
                                />
                                <button
                                    type="button"
                                    className={`main__form-icon-button`}
                                    aria-pressed={isConfirmPasswordVisible}
                                    aria-label={isConfirmPasswordVisible ? visiblePassword : hidenPassword}
                                    onClick={toggleConfirmPasswordVisible}
                                >
                                    <img
                                        className="main__form-icon"
                                        src={isConfirmPasswordVisible ? visiblePassword : hidenPassword}
                                        alt={isConfirmPasswordVisible ? "visible password icon" : "hidde password icon"}
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <p className={`main__form-input-error ${errors.confirmPassword?.message ? "main__form-input-error--visible" : ""}`}>{errors.confirmPassword?.message}</p>
                        </div>
                    )}
                    {isSignin && (
                        <p className="main__form-link-password">Esqueceu da senha?</p>)}
                    <button type="submit" disabled={!isValid} className={`main__form-submit ${!isValid ? "main__form-submit--disabled" : ""}`} >{isSignin ? "Login" : "Register"}</button>
                </div>
            </form >
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
        </div >
    );
}

export default Main;
