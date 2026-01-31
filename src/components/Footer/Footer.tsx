import Logo from "../Logo/Logo"

function Footer() {
    return (
        <footer className="footer">
            <Logo isBlack={false} />
            <p className="footer__copyright">© 2025 Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer