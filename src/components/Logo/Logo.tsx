interface LogoProps {
    isBlack: boolean;
}

function Logo({ isBlack }: LogoProps) {
    return (
        <p className={`logo ${isBlack ? "logo--black " : ""}`}>NootiUp</p>
    )
}

export default Logo