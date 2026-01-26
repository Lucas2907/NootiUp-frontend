import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState, type ChangeEvent } from 'react';



interface PopupMyProfileProps {
    isOpened: boolean;
    onClose: () => void;
    onSubmit: (name: string) => void;
}


function PopupMyProfile({ isOpened, onClose, onSubmit }: PopupMyProfileProps) {

    const [name, setName] = useState<string>("")


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit(name)
        onClose()
    }

    if (!isOpened) {
        return null;
    }
    return (
        <div className={"popup " + (isOpened ? "popup__opened" : "")}>
            <div className="popup-my-profile">

                <h3 className="popup-my-profile__title">Entrar com Github</h3>
                <form className="popup-my-profile__form" onSubmit={handleSubmit}>
                    <div className="input elements">
                        <label htmlFor="username" className="popup-my-profile__form-text">username</label>
                        <input onChange={handleChange} className="popup-my-profile__form-input" type="text" id="username" placeholder='Insira um nome de usuário' />
                    </div>
                    <button className="popup-my-profile__form-button" >Entrar</button>
                </form>
                <FontAwesomeIcon icon={faTimes} className="popup-my-profile__close-button" onClick={onClose} />

            </div>

        </div >
    )
}

export default PopupMyProfile