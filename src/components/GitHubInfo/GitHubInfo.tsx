import socialIcon from "../../assets/images/social.png";
import worldIcon from "../../assets/images/world.png";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import ButtonGitHub from "../ButtonGitHub/ButtonGitHub"

interface UserInfo {
    avatar_url?: string;
    name?: string;
    bio?: string;
    followers?: number;
    following?: number;
    location?: string;
    public_repos?: number;
    [key: string]: unknown;
} 

function GitHubInfo() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
            setUserInfo(null);
            setIsLoading(false);
            return;
        }

        try {
            const parsed = JSON.parse(savedUser);
            if (parsed && parsed.id) {
                setUserInfo(parsed);
            } else {
                setUserInfo(null);
            }
        } catch {
            setUserInfo(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    function removeAccess() {
        localStorage.removeItem("user");
        setUserInfo(null);
        window.location.reload();
    }

    if (isLoading) {
        return <Preloader />;
    }

    if (!userInfo) {
        return (
            <div className="github-container">
                <h2 className="github-container__text">
                    Conecte sua conta GitHub para exibir suas informações
                </h2>
                <p className="github-container__form-text">
                    Use o botão &quot;Login com GitHub&quot; para conectar sua conta.
                </p>
                <ButtonGitHub />
            </div>
        );
    }

    return (
        <div className="github-info">
            <h1 className="github-info__title">Informações da sua conta GitHub</h1>

            <div className="github-info__cards">
                <div className="github-info__card github-info__card--basic">
                    <div className="github-info__basic-header">
                        <h2 className="github-info__basic-title">Basic Info</h2>
                    </div>

                    <img
                        src={userInfo.avatar_url}
                        alt="avatar user info"
                        className="github-info__basic-profile-image"
                    />
                    <h3 className="github-info__basic-username">
                        {userInfo.name || "Sem nome"}
                    </h3>
                    <p className="github-info__basic-biography">
                        {userInfo.bio || "Sem bio"}
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
                            <p className="github-info__social-value">
                                {userInfo.followers ?? 0}
                            </p>
                            <p className="github-info__social-label">Followers</p>
                        </div>

                        <div className="github-info__social-item">
                            <p className="github-info__social-value">
                                {userInfo.following ?? 0}
                            </p>
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
                    <p className="github-info__location-text">
                        {userInfo.location || "Sem localização"}
                    </p>
                </div>

                <div className="github-info__card github-info__card--repos">
                    <p className="github-info__repos-label">Public Reps</p>
                    <p className="github-info__repos-value">
                        {userInfo.public_repos ?? 0}
                    </p>
                </div>
            </div>
            <button className="exit-git" onClick={removeAccess}>
                Sair da conta GitHub
            </button>
        </div>
    );
}

export default GitHubInfo;
