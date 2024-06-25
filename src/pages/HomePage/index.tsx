import useAuthentication from "@/service/AuthenticationService/modules";
import { DefaultPageType } from "../Types";
import { Button, View, Text, StyleSheet } from 'react-native';

const HomePage: DefaultPageType = ({ navigation }) => {

    const { logout } = useAuthentication();

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ver Sobre"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar Vagas"
                    onPress={() => navigation.navigate('CadastrarVagas')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Aplicar Vagas"
                    onPress={() => navigation.navigate('AplicarVagas')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7', // Um fundo claro
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginBottom: 10,
        width: '80%', // Largura dos botões
    }
});

export default HomePage;