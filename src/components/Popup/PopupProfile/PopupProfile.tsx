import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useCurrentUser } from "../../../contexts/userContext";
import { updateProfile } from "../../../utils/UserApi";

interface PopupProfileProps {
    onClose: () => void;
}

type FormValues = {
    username: string;
    profession: string;
};

function PopupProfile({ onClose }: PopupProfileProps) {
    const { setUser, username, profession, email } = useCurrentUser();

    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        defaultValues: {
            username,
            profession,
        },
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors, isValid } = formState;

    const currentUsername = useWatch({ control, name: "username" });
    const currentProfession = useWatch({ control, name: "profession" });

    const hasChanges =
        currentUsername !== username || currentProfession !== profession;

    const canSubmit = hasChanges && isValid && !isSubmitting;

    const onSubmit = async (data: FormValues) => {
        try {
            setSubmitError(null);
            setIsSubmitting(true);


            const updated = await updateProfile(data.username, data.profession);

            setUser(prev => ({
                ...(prev || {
                    username: "User",
                    profession: "Not defined",
                    email: "",
                }),
                username: updated.name,
                profession: updated.profession,
                email: updated.email ?? email,
            }));

            onClose();
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Erro ao atualizar perfil";
            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="popup-profile">
            <h2 className="popup-profile__title">Edit Profile</h2>
            <form
                className="popup-profile__form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className="popup-profile__items">
                    <label
                        className={`popup-profile__label ${errors.username?.message ? "popup-profile__label--error" : ""
                            }`}
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <div
                        className={`popup-profile__container ${errors.username?.message ? "popup-profile__container--error" : ""
                            }`}
                    >
                        <input
                            className="popup-profile__input"
                            id="username"
                            type="text"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Insira um nome de usuário",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Mínimo de 3 caracteres",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Máximo de 15 caracteres",
                                },
                            })}
                        />
                    </div>
                    <p
                        className={`popup-profile__error ${errors.username?.message
                            ? "popup-profile__error-input--visible"
                            : "popup-profile__error-input"
                            }`}
                    >
                        {errors.username?.message}
                    </p>
                </div>

                <div className="popup-profile__items">
                    <label
                        className={`popup-profile__label ${errors.profession?.message ? "popup-profile__label--error" : ""
                            }`}
                        htmlFor="profession"
                    >
                        Profession
                    </label>
                    <div
                        className={`popup-profile__container ${errors.profession?.message ? "popup-profile__container--error" : ""
                            }`}
                    >
                        <input
                            className="popup-profile__input"
                            id="profession"
                            type="text"
                            {...register("profession", {
                                required: {
                                    value: true,
                                    message: "Insira uma profissão",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Mínimo de 5 caracteres",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Máximo de 25 caracteres",
                                },
                            })}
                        />
                    </div>
                    <p
                        className={`popup-profile__error ${errors.profession?.message
                            ? "popup-profile__error-input--visible"
                            : "popup-profile__error-input"
                            }`}
                    >
                        {errors.profession?.message}
                    </p>
                </div>

                {submitError && (
                    <p className="popup-profile__error popup-profile__error-submit">
                        {submitError}
                    </p>
                )}

                <div className="popup-profile__submit-items">
                    <button
                        disabled={!canSubmit}
                        type="submit"
                        className={`popup-profile__submit-button ${!canSubmit ? "popup-profile__submit-button-disabled" : ""
                            }`}
                    >
                        {isSubmitting ? "Salvando..." : "Submit"}
                    </button>
                    <p
                        className={`popup-profile__error ${hasChanges
                            ? "popup-profile__error-submit"
                            : "popup-profile__error-submit--visible"
                            }`}
                    >
                        Mude alguma informação
                    </p>
                </div>
            </form>
        </div>
    );
}

export default PopupProfile;
