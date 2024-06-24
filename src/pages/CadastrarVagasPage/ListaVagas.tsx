import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { VagasContext } from './VagasContext';

const ListaVagas: React.FC = () => {
  const { vagas } = useContext(VagasContext);

  return (
    <FlatList
      data={vagas}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item }) => (
        <View style={styles.vagaContainer}>
          <Text style={styles.vagaTitulo}>{item.titulo}</Text>
          <Text>{item.descricao}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  vagaContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  vagaTitulo: {
    fontWeight: 'bold',
  },
});

export default ListaVagas;