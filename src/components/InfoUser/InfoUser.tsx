import { useCurrentUser } from "../../contexts/userContext"

type InfoUserProps = {
    profileImage: string,
}

function InfoUser({ profileImage }: InfoUserProps) {

    const { username, profession } = useCurrentUser()
    return (
        <>
            <img className="my-progress__profile-image" src={profileImage} alt="example perfil image" />
            <h4 className="my-progress__profile-title">{username}</h4>
            <p className="my-progress__profile-about">{profession}</p>
        </>
    )
}

export default InfoUser