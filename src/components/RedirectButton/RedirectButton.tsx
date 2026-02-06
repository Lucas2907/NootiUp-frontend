import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useCurrentUser } from '../../contexts/userContext';


type RedirectButtonProps = {
    isLogged: boolean
    text: string

}

function RedirectButton({ isLogged, text }: RedirectButtonProps) {

    const { username } = useCurrentUser()

    return (
        <button className="redirect-button">
            <div className='redirect-button__elements'>
                <p className="redirect-button__elements-button">{text}</p>
                {
                    isLogged ? (
                        <div className='redirect-button__elements--logged'>
                            <p className="redirect-button__elements-button">{username}</p>
                            <FontAwesomeIcon icon={faUser} className="redirect-button__elements-image" />
                        </div>
                    ) : ""
                }
            </div>
        </button >
    )
}

export default RedirectButton