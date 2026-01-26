import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function GitHubAuthPage() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const code = searchParams.get("code")
        if (!code) {
            console.error("Sem code na URL")
            navigate("/signin")
            return
        }

        console.log("code no github:", code)

        localStorage.setItem("githube_code", code)

        navigate("/")
    }, [navigate, searchParams])

    return (
        <>
            <div className="github__preloader circle-preloader"></div>
            <p className="github__text">Autenticação em andamento...</p>
        </>
    )
}

export default GitHubAuthPage