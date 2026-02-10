import socialIcon from "../../assets/images/social.png";
import worldIcon from "../../assets/images/world.png";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import ButtonGitHub from "../ButtonGitHub/ButtonGitHub";

interface UserInfo {
    githubLogin: string;
    githubName: string;
    avatarUrl: string;
    bio: string;
    location: string;
    followers: number;
    following: number;
    publicRepos: number;
}

const BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

function GitHubInfo() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const connectGitHub = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const code = params.get("code");

                if (code) {
                    window.history.replaceState({}, "", "/github-info");

                    const token = localStorage.getItem("token");
                    if (!token) {
                        setError("Você precisa estar logado no NootiUp");
                        setIsLoading(false);
                        return;
                    }

                    const res = await fetch(`${BACK_END_URL}/github/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ code }),
                    });

                    if (!res.ok) {
                        throw new Error(`Erro ao conectar GitHub: ${res.status}`);
                    }

                    const profile = await res.json();

                    localStorage.setItem("githubUser", JSON.stringify(profile));
                    setUserInfo(profile);
                    setIsLoading(false);
                    return;
                }

                const savedUser = localStorage.getItem("githubUser");
                if (savedUser) {
                    const parsed = JSON.parse(savedUser);
                    setUserInfo(parsed);
                }
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : "Erro ao conectar GitHub";
                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        connectGitHub();
    }, []);

    function removeAccess() {
        localStorage.removeItem("githubUser");
        setUserInfo(null);
        window.location.reload();
    }

    if (isLoading) {
        return <Preloader />;
    }

    if (error) {
        return (
            <div className="github-container">
                <h2 className="github-container__text">Erro ao conectar</h2>
                <p className="github-container__form-text">{error}</p>
                <ButtonGitHub />
            </div>
        );
    }

    if (!userInfo) {
        return (
            <div className="github-container">
                <h2 className="github-container__text">
                    Conecte sua conta GitHub para exibir suas informações
                </h2>
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
                        src={userInfo.avatarUrl}
                        alt="avatar user info"
                        className="github-info__basic-profile-image"
                    />
                    <h3 className="github-info__basic-username">
                        {userInfo.githubName || "Sem nome"}
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
                        {userInfo.publicRepos ?? 0}
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
