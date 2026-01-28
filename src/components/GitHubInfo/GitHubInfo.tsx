import socialIcon from "../../assets/images/social.png"
import worldIcon from "../../assets/images/world.png"
import infoIcon from "../../assets/images/info.png"
import apiGit from "../../utils/GitHubApi"
import { useEffect, useState } from "react"

function GitHubInfo() {

    interface UserInfo {
        [key: string]: string;
    }

    const [user, setUser] = useState<string>("")
    const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null
    });

    function showCurrentUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setUser(user)
        if (user) {
            showUserInfo(user)
        }
        return
    }

    async function showUserInfo(name: string) {
        const currentUser = await apiGit.getInfo(name)
        return currentUser.message ? null : setUserInfo(currentUser), localStorage.setItem("user", JSON.stringify(currentUser))
    }

    if (!userInfo) {
        return (

            <div className="github-container">
                <h2 className="github-container__text">Entre com GitHub para exibir suas informações</h2>
                <form className="github-form" onSubmit={showCurrentUser} >
                    <div className="github-form__elements">
                        <label className="github-form__elements-label" id="git-input">Username</label>
                        <input onChange={(e) => setUser(e.target.value)} value={user} className="github-form__input" id="git-input" />
                    </div>
                    <button className="github-form__submit" type="submit">Entrar</button>
                </form>
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
                        src={userInfo.avatar_url}
                        alt="example"
                        className="github-info__basic-profile-image"
                    />
                    <h3 className="github-info__basic-username">{userInfo.name}</h3>
                    <p className="github-info__basic-biography">
                        {userInfo.bio}
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
                            <p className="github-info__social-value">{userInfo.followers}</p>
                            <p className="github-info__social-label">Followers</p>
                        </div>

                        <div className="github-info__social-item">
                            <p className="github-info__social-value">{userInfo.following}</p>
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
                    <p className="github-info__location-text">{userInfo.location}</p>
                </div>

                <div className="github-info__card github-info__card--repos">
                    <p className="github-info__repos-label">Public Reps</p>
                    <p className="github-info__repos-value">{userInfo.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export default GitHubInfo
