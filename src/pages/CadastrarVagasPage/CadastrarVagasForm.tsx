import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { VagasContext } from './VagasContext';

const CadastrarVagasForm: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { adicionarVaga } = useContext(VagasContext);

  const handleSubmit = () => {
    adicionarVaga({ titulo, descricao });
    setTitulo('');
    setDescricao('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Título da Vaga:</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />
      <Text style={styles.label}>Descrição da Vaga:</Text>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} multiline />
      <Button title="Cadastrar Vaga" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default CadastrarVagasForm;