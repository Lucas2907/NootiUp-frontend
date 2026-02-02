function PopupProfile() {
    return (
        <div className="popup-profile">
            <h2 className="popup-profile__title">Edit Profile</h2>
            <form className="popup-profile__form">

                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="username">Username</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="username" type="text" />
                    </div>
                    <p className="popup-profile__error popup-profile__error--input">min 3 characters</p>
                </div>
                <div className="popup-profile__items">
                    <label className="popup-profile__label" htmlFor="profession">Profession</label>
                    <div className="popup-profile__container">
                        <input className="popup-profile__input" id="profession" type="text" />
                    </div>
                    <p className="popup-profile__error popup-profile__error--input">min 5 characters</p>
                </div>
                <div className="popup-profile__submit-items">
                    <button type="button" className="popup-profile__submit-button">Submit</button>
                    <p className="popup-profile__error popup-profile__error--submit">change your info to submit</p>
                </div>
            </form>
        </div>
    )
}

export default PopupProfile