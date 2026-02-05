import { useCurrentUser } from "../../../contexts/userContext"
import { useForm, useWatch } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface PopupProfileProps {
    onClose: () => void;
}

function PopupProfile({ onClose }: PopupProfileProps) {

    const { setUser, username, profession } = useCurrentUser()

    type FormValues = {
        username: string
        profession: string
    }

    const form = useForm<FormValues>({
        defaultValues: {
            username,
            profession
        },
    })

    const { register, control, handleSubmit, formState } = form

    const { errors } = formState

    const currentUsername = useWatch({ control, name: "username" })
    const currentProfession = useWatch({ control, name: "profession" })

    const hasChanges = currentUsername !== username || currentProfession !== profession

    const onSubmit = (data: FormValues) => {
        if (!setUser) return
        setUser(prev => ({
            ...prev,
            username: data.username,
            profession: data.profession
        }))
        onClose()
    }

    return (
        <div className="popup-profile">
            <h2 className="popup-profile__title">Edit Profile</h2>
            <form className="popup-profile__form" onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="username">Username</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="username" type="text"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Insira um nome de usuário"

                                },
                            })} />
                    </div>
                    <p className={`popup-profile__error ${errors.username?.message ? "popup-profile__error-input--visible" : "popup-profile__error-input"}`}>{errors.username?.message}</p>
                </div>
                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="profession">Profession</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="profession" type="text"
                            {...register("profession", {
                                required: {
                                    value: true,
                                    message: "Insira uma profissão"
                                },
                            }
                            )} />
                    </div>
                    <p className={`popup-profile__error ${errors.username?.message ? "p opup-profile__error-input--visible" : "popup-profile__error-input"}`}>{errors.profession?.message}</p>
                </div>
                <div className="popup-profile__submit-items">
                    <button disabled={!hasChanges} type="submit"
                        className={`popup-profile__submit-button ${!hasChanges ? 'popup-profile__submit-button-disabled' : ''}`}>Submit</button>
                    <p className={`popup-profile__error ${hasChanges ? "popup-profile__error-submit" : "popup-profile__error-submit--visible"}`}>
                        change your info to submit
                    </p>

                </div>
            </form >
            <DevTool control={control} />
        </div >
    )
}

export default PopupProfile