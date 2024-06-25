import pages from '@/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProtectedRoutes = () => {
    const { HomePage, AboutPage, CadastrarVagasPage, AplicarVagasPage } = pages;

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Sobre nós" component={AboutPage} />
                <Stack.Screen name="Cadastrar vagas" component={CadastrarVagasPage} />
                <Stack.Screen name="Aplicar nas vagas" component={AplicarVagasPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const RoutesProvider = () => {

    return <ProtectedRoutes /> 
}

export default RoutesProvider;