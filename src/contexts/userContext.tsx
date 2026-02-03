import { createContext, useContext } from "react";

export interface CurrentUserContextType {
    username: string,
    profession: string
    setUser?: React.Dispatch<React.SetStateAction<CurrentUserContextType>>;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null)

const useCurrentUser = () => {
    const currentUserContext = useContext(CurrentUserContext)
    if (!currentUserContext) {
        throw new Error("useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }

    return currentUserContext
}

export { useCurrentUser };

export default CurrentUserContext