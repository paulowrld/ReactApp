import { DefaultPageType } from "../Types";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutPage: DefaultPageType = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Sobre o App</Text>
            <Text style={styles.content}>
                Bem-vindo ao nosso aplicativo, uma plataforma inovadora dedicada a promover o Trabalho Decente e o Crescimento Econômico, alinhada com os objetivos da ODS 8. Nosso aplicativo serve como uma ponte entre empresas e profissionais, facilitando o cadastro e a aplicação para vagas de emprego. Embora esta versão seja uma demonstração, ela é um passo importante em direção a um mercado de trabalho mais justo e acessível.
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text style={styles.buttonText}>Voltar para Início</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 20,
        color: '#666',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#0066cc',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default AboutPage;