import useAuthentication from "@/service/AuthenticationService/modules";
import { DefaultPageType } from "../Types";
import { Button, View, Text } from 'react-native';

const HomePage: DefaultPageType = ({ navigation }) => {

    const { logout } = useAuthentication();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela inicial</Text>
            <Button
                title="Ver Sobre"
                onPress={() => navigation.navigate('About')}
            />
            <Button
                title="Cadastrar Vagas"
                onPress={() => navigation.navigate('CadastrarVagas')}
            />
             <Button
                title="Aplicar Vagas"
                onPress={() => navigation.navigate('AplicarVagas')}
            />
        </View>
    )
}

export default HomePage;