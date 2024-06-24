import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { VagasContext } from '../CadastrarVagasPage/VagasContext';


const AplicarVagasPage: React.FC = () => {
  const { vagas } = useContext(VagasContext);
  const [aplicou, setAplicou] = useState(false);

  const aplicarVaga = (titulo: string) => {
    console.log(`Aplicando para a vaga: ${titulo}`); 
    setAplicou(true);
    Alert.alert("Sucesso", `Você aplicou para a vaga ${titulo} com sucesso. Aguarde o contato da empresa.`);
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={vagas}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => (
          <View style={styles.vagaContainer}>
            <Text style={styles.vagaTitulo}>{item.titulo}</Text>
            <Button
              title="Aplicar"
              onPress={() => aplicarVaga(item.titulo)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  vagaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  vagaTitulo: {
    fontWeight: 'bold',
  },
});

export default AplicarVagasPage;