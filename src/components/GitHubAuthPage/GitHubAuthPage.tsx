import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
const BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

function GitHubAuthPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const handleAuth = async () => {
            const code = searchParams.get("code")
            if (!code) {
                console.error("Sem code na URL")
                navigate("/signin")
                return
            }

            try {
                const res = await fetch(`${BACK_END_URL}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code })
                });

                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const user = await res.json()
                localStorage.setItem("users", JSON.stringify(user))


            } catch (error) {
                console.error("Erro no login:", error);
                navigate("/signin")
            }

            navigate("/")
        }

        handleAuth()

    }, [navigate, searchParams])

    return (
        <>
            <div className="github__preloader circle-preloader"></div>
            <p className="github__text">Autenticação em andamento...</p>
        </>
    )
}

export default GitHubAuthPage
