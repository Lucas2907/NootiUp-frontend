type InfoUserProps = {
    profileImage: string,
    name: string,
    about: string
}

function InfoUser({ profileImage, name, about }: InfoUserProps) {
    return (
        <>
            <img className="my-progress__profile-image" src={profileImage} alt="example perfil image" />
            <h4 className="my-progress__profile-title">{name}</h4>
            <p className="my-progress__profile-about">{about}</p>
        </>
    )
}

export default InfoUser