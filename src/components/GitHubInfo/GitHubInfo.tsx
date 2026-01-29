import socialIcon from "../../assets/images/social.png"
import worldIcon from "../../assets/images/world.png"
import infoIcon from "../../assets/images/info.png"
import apiGit from "../../utils/GitHubApi"
import { useState } from "react"
import Preloader from "../Preloader/Preloader"

function GitHubInfo() {

    interface UserInfo {
        [key: string]: string;
    }

    const [user, setUser] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
        const savedUser = localStorage.getItem("user");
        if (!savedUser) return null;
        try {
            const parsed = JSON.parse(savedUser);
            if (parsed.id) {
                return parsed

            }
            return null;
        } catch {
            return null;
        }
    });

    function removeAcess() {
        localStorage.removeItem("user")
        setUserInfo(null)
        setUser("")
        window.location.reload()

    }

    async function showCurrentUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsError(false)
        setIsLoading(true)
        try {
            if (user) {
                const currentUser = await apiGit.getInfo(user)
                if (!currentUser.message) {
                    setUserInfo(currentUser)
                    localStorage.setItem("user", JSON.stringify(currentUser))
                }
                if (currentUser.status == "404") {
                    setIsError(true)
                }
            }
        } catch (error) {
            console.log("erro", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
        setIsError(false);
    }

    if (isLoading) {
        return (
            <Preloader />
        )
    }


    if (!userInfo) {
        return (

            <div className="github-container">
                <h2 className="github-container__text">Entre com GitHub para exibir suas informações</h2>
                <form className="github-form" onSubmit={showCurrentUser} >
                    <div className="github-form__elements">
                        <label className="github-form__elements-label" id="git-input">Username:</label>
                        <input onChange={handleChangeInput} value={user} className={`github-form__input ${isError ? "github-form__input_error" : ""}`} id="git-input" placeholder="Lucas2907" />
                        <p className={`github-form__text ${isError ? "github-form__text_error" : ""}`}>usuário não encontrado</p>
                    </div>
                    <button disabled={isError ? true : false} className={`github-form__submit ${isError ? "github-form__submit_disabled" : ""}`} type="submit">Entrar</button>
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
                        alt="avatar user info"
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
                        alt="a social-info icon"
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
            <button className="exit-git" onClick={removeAcess}>Sair da conta GitHub</button>
        </div>
    )
}

export default GitHubInfo
