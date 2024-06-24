import React from 'react';
import { View, Button } from 'react-native';
import CadastrarVagasForm from './CadastrarVagasForm';
import ListaVagas from './ListaVagas';

const CadastrarVagasPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CadastrarVagasForm />
      <ListaVagas />
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default CadastrarVagasPage;