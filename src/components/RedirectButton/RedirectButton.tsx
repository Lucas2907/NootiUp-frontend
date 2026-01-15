import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


type RedirectButtonProps = {
    text: string
    isLogged: boolean

}

function RedirectButton({ text, isLogged }: RedirectButtonProps) {
    return (
        <button className="redirect-button">
            <div className='redirect-button__elements'>
                <p className="redirect-button__elements-button">{text}</p>
                {
                    isLogged ? (
                        <FontAwesomeIcon icon={faUser} className="redirect-button__elements-image" />
                    ) : ""
                }
            </div>
        </button >
    )
}

export default RedirectButton