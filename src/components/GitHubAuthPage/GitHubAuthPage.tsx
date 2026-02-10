import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

function GitHubAuthPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const handleAuth = async () => {
            const code = searchParams.get("code");
            if (!code) {
                console.error("Sem code na URL");
                navigate("/signin");
                return;
            }

            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Usuário não logado no NootiUp");
                    navigate("/signin");
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
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const profile = await res.json();
                localStorage.setItem("githubUser", JSON.stringify(profile));

                navigate("/github-info");
            } catch (error) {
                console.error("Erro no login:", error);
                navigate("/signin");
            }
        };

        handleAuth();
    }, [navigate, searchParams]);

    return (
        <>
            <div className="circle-preloader"></div>
            <p className="github__text">Autenticação em andamento...</p>
        </>
    );
}

export default GitHubAuthPage;
