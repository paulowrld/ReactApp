import { useEffect, useState } from "react"
import { AuthenticationContext } from "./modules"
import User, { UserData } from "@/models/User";
import { AuthenticationStateProviderType } from "./types";


const AuthenticationStateProvider: AuthenticationStateProviderType = ({children}) => {

    const [ userData, setUserData ] = useState<UserData | null>(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

    const setLogin = (user: User) => {
        // if(user.username == "test" && user.password == "123"){
        //     setUserData(user);
        //     setIsAuthenticated(true);

        // }
        setUserData(user);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUserData(null);
    }

    useEffect(() => {
            setIsAuthenticated(true);
    }, []);


    const context = {
        userData,
        isAuthenticated,
        setLogin,
        logout
    }

    return(
        <AuthenticationContext.Provider value={context}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationStateProvider;