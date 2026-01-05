import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


type RedirectButtonProps = {
    text: string
    isLogged: boolean

}

function RedirectButton({ text, isLogged }: RedirectButtonProps) {
    return (
        <button className="redirect-button">
            <p className="redirect-button__button">{text}</p>
            {
                isLogged ? (
                    <FontAwesomeIcon icon={faUser} className="redirect-button__image" />
                ) : ""
            }
        </button >
    )
}

export default RedirectButton