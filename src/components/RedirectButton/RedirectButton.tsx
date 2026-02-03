import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useCurrentUser } from '../../contexts/userContext';


type RedirectButtonProps = {
    isLogged: boolean

}

function RedirectButton({ isLogged }: RedirectButtonProps) {

    const { username } = useCurrentUser()

    return (
        <button className="redirect-button">
            <div className='redirect-button__elements'>
                <p className="redirect-button__elements-button">{username}</p>
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