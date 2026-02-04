import { useCurrentUser } from "../../../contexts/userContext"
import { useState } from "react";

interface PopupProfileProps {
    onClose: () => void;
}

function PopupProfile({ onClose }: PopupProfileProps) {

    const { setUser, username, profession } = useCurrentUser()

    const [usernameInput, setUsername] = useState(username);
    const [professionInput, setProfession] = useState(profession);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!setUser) return;

        setUser(prev => ({
            ...prev,
            username: usernameInput,
            profession: professionInput,
        }));
        onClose();

    }

    return (
        <div className="popup-profile">
            <h2 className="popup-profile__title">Edit Profile</h2>
            <form className="popup-profile__form" onSubmit={handleSubmit}>

                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="username">Username</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="username" type="text" value={usernameInput} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <p className="popup-profile__error popup-profile__error--input">min 3 characters</p>
                </div>
                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="profession">Profession</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="profession" type="text" value={professionInput} onChange={e => setProfession(e.target.value)} />
                    </div>
                    <p className="popup-profile__error popup-profile__error--input">min 5 characters</p>
                </div>
                <div className="popup-profile__submit-items">
                    <button type="submit" className="popup-profile__submit-button">Submit</button>
                    <p className="popup-profile__error popup-profile__error--submit">change your info to submit</p>
                </div>
            </form>
        </div>
    )
}

export default PopupProfile