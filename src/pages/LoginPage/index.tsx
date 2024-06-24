import { Button, TextInput, View } from "react-native";
import { DefaultPageType } from "../Types";
import useAuthentication from "@/service/AuthenticationService/modules";
import User from "@/models/User";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";


const LoginPage: DefaultPageType = () => {

    const { setLogin } = useAuthentication();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const login = () => {

        setErrorMessage("");
        if(!username || !password){
            setErrorMessage("Login e senha devem estar preenchidos.")
            return;
        }

        const user: User = {
            username: username,
            password: password
        }
        setLogin(user)
    }

    return (
        <View>
            <Button 
                title="test"
            />
        </View>
    )
};

export default LoginPage;