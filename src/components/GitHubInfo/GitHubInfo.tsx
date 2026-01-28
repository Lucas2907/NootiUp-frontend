import socialIcon from "../../assets/images/social.png"
import worldIcon from "../../assets/images/world.png"
import infoIcon from "../../assets/images/info.png"
import apiGit from "../../utils/GitHubApi"
import ButtonGitHub from "../ButtonGitHub/ButtonGitHub"

function GitHubInfo() {
    const user = apiGit.getLoggedUser()
    if (!user) {
        return (
            <div className="gitHub-container">
                <h2 className="github-container__text">Logue com sua conta do GitHub para ver suas Informações</h2>
                <ButtonGitHub />
            </div>
        )
    }
    return (
        <div className="github-info">
            <h1 className="github-info__title">Informações da sua conta GitHub</h1>

            <div className="github-info__cards">
                <div className="github-info__card github-info__card--basic">
                    <div className="github-info__basic-header">
                        <h2 className="github-info__basic-title">Basic Info</h2>
                        <img className="github-info__basic-icon" src={infoIcon} alt="" />
                    </div>

                    <img
                        src={user.avatar_url}
                        alt="example"
                        className="github-info__basic-profile-image"
                    />
                    <h3 className="github-info__basic-username">{user.name}</h3>
                    <p className="github-info__basic-biography">
                        {user.bio}
                    </p>
                </div>

                <div className="github-info__card github-info__card--social">
                    <img
                        className="github-info__social-icon"
                        src={socialIcon}
                        alt=""
                    />

                    <div className="github-info__social-list">
                        <div className="github-info__social-item">
                            <p className="github-info__social-value">{user.followers}</p>
                            <p className="github-info__social-label">Followers</p>
                        </div>

                        <div className="github-info__social-item">
                            <p className="github-info__social-value">{user.following}</p>
                            <p className="github-info__social-label">Following</p>
                        </div>
                    </div>
                </div>

                <div className="github-info__card github-info__card--location">
                    <img
                        className="github-info__location-icon"
                        src={worldIcon}
                        alt="world icon"
                    />
                    <p className="github-info__location-text">{user.location}</p>
                </div>

                <div className="github-info__card github-info__card--repos">
                    <p className="github-info__repos-label">Public Reps</p>
                    <p className="github-info__repos-value">{user.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export default GitHubInfo
