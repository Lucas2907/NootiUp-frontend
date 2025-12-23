//generic import
import editProfile from "../../assets/images/edit-profile.png"
import profileImage from "../../assets/images/profile-example.jpg"
import { Link } from "react-router-dom"
//import component


function MyProfile() {
    return (
        <div className="my-profile">
            <div className="my-profile__user-info">
                <img className="my-profile__user-image" src={profileImage} alt="" />
                <div className="my-profile__user-data">
                    <div className="my-profile__user-info">
                        <h2 className="my-profile__user-info-name">Lucas</h2>
                        <img className="my-profile__user-info-image" src={editProfile} alt="a profile edit icon" />
                    </div>
                    <p className="my-profile__user-about">Web Developer</p>
                </div>
            </div>
            <div className="my-profile__email">
                <p className="my-profile__email-name">EMAIL:</p>
                <p className="my-profile__email-text"> lucas@gmail.com</p>
            </div>
            <p className="my-profile-text">Entrou em 18/01/2025</p>
            <Link to={"/signin"} className="app-link my-profile-exit_link"><button className="my-profile-exit">Sair</button></Link >
        </div>
    )
}

export default MyProfile