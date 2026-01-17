import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface PopupMyProfileProps {
    isOpened: boolean;
    onClose: () => void;
}

function PopupMyProfile({ isOpened, onClose }: PopupMyProfileProps) {

    if (!isOpened) {
        return null;
    }
    return (
        <div className={"popup " + (isOpened ? "popup__opened" : "")}>
            <div className="popup-my-profile">

                <h3 className="popup-my-profile__title">Entrar com Github</h3>
                <form className="popup-my-profile__form">
                    <div className="input elements">
                        <label htmlFor="username" className="popup-my-profile__form-text">username</label>
                        <input className="popup-my-profile__form-input" type="text" id="username" placeholder='Insira um nome de usuário' />
                    </div>
                    <button className="popup-my-profile__form-button" onClick={onClose}>Entrar</button>
                </form>
                <FontAwesomeIcon icon={faTimes} className="popup-my-profile__close-button" onClick={onClose} />

            </div>

        </div >
    )
}

export default PopupMyProfile