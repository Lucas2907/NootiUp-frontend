import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import apiGit from "../../utils/GitHubApi";

function ButtonGitHub() {

    // const handleLogin = () => {
    //     apiGit.login()
    // }

    return (
        <button className="git-button  ">
            <FontAwesomeIcon className="my-profile-addGit__icon" icon={faGithub} />
            <p className="my-profile-addGit__text">Entrar com GitHub</p>
        </button>)
}

export default ButtonGitHub