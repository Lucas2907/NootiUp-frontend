import socialIcon from "../../assets/images/social.png"
import worldIcon from "../../assets/images/world.png"
import infoIcon from "../../assets/images/info.png"
import api from "../../utils/GitHubApi"
import { useState, useEffect } from "react"


function GitHubInfo() {

    const [userAvatar, setUserAvatar] = useState<string>("")
    const [nameUser, setNameUser] = useState<string>("")
    const [bioUser, setBioUser] = useState<string>("")
    const [followersUser, setFollowersUser] = useState<string>("")
    const [followingUser, setFollowingUser] = useState<string>("")
    const [locationUser, setLocationUser] = useState<string>("")
    const [publicRepoUser, setPublicRepoUser] = useState<string>("")



    useEffect(() => {
        async function loadUserInfo() {
            const avatar = await api.getAvatar("")
            if (avatar === null) {
                setUserAvatar("https://i.pinimg.com/736x/e8/c7/03/e8c703dd73d67cd8de09dfd4e839c99c.jpg")
            }
            else {
                setUserAvatar(avatar)
            }
            const name = await api.getName("")
            if (name === null) {
                setNameUser("Not Found")
            }
            else {
                setNameUser(name)
            }
            const bio = await api.getBio("")
            if (bio === null) {
                setBioUser("Not found")
            }
            else {
                setBioUser(bio)
            }

            const followers = await api.getFollowers("")
            if (followers === null) {
                setFollowersUser("0")
            }
            else {
                setFollowersUser(followers)
            }

            const following = await api.getFollowing("")
            if (following === null) {
                setFollowingUser("0")
            }
            else {
                setFollowingUser(following)
            }

            const location = await api.getLocation("")
            if (location === null) {
                setLocationUser("Not Found")
            }
            else {
                setLocationUser(location)
            }

            const publicRepo = await api.getPublicRepo("")
            if (publicRepo === null) {
                setPublicRepoUser("Not Found")
            }
            else {
                setPublicRepoUser(publicRepo)
            }

        }
        loadUserInfo()
    }, [])


    //criar proximas chamadas fetch para meu projeto e depois otimizar useEffect para nao DRY  !!!

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
                        src={userAvatar}
                        alt="example"
                        className="github-info__basic-profile-image"
                    />
                    <h3 className="github-info__basic-username">{nameUser}</h3>
                    <p className="github-info__basic-biography">
                        {bioUser}
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
                            <p className="github-info__social-value">{followersUser}</p>
                            <p className="github-info__social-label">Followers</p>
                        </div>

                        <div className="github-info__social-item">
                            <p className="github-info__social-value">{followingUser}</p>
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
                    <p className="github-info__location-text">{locationUser}</p>
                </div>

                <div className="github-info__card github-info__card--repos">
                    <p className="github-info__repos-label">Public Reps</p>
                    <p className="github-info__repos-value">{publicRepoUser}</p>
                </div>
            </div>
        </div>
    )
}

export default GitHubInfo
