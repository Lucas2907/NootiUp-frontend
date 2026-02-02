import { useEffect } from "react";
import closeButton from "../../assets/images/close-icon.png"
import PopupProfile from "./PopupProfile/PopupProfile"
interface PopupProps {
    onClose: () => void;
}

function Popup({ onClose }: PopupProps) {

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);


    return (
        <div className="popup-sobreposition" onClick={onClose}>
            <div className="popup" onClick={handleContentClick}>
                <button onClick={onClose} type="button" className="popup__close-button">
                    <img className="popup__close-icon" src={closeButton} alt="close button icon" />
                </button>
                <PopupProfile />
            </div>
        </div>

    )
}

export default Popup