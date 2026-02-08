import { createContext, useContext } from "react";

export interface CurrentUserState {
    username: string;
    profession: string;
    email: string;
}

export interface CurrentUserContextType extends CurrentUserState {
    setUser: React.Dispatch<React.SetStateAction<CurrentUserState>>;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

export const useCurrentUser = () => {
    const currentUserContext = useContext(CurrentUserContext);
    if (!currentUserContext) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }
    return currentUserContext;
};

export default CurrentUserContext;
