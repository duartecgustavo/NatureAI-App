import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, StyleSheet } from 'react-native';
import { getDicas, postDicas } from '../service/getDepoiments';

const MyForm = ({fetchData}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [dica, setDica] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postDicas({ nome, email, tipo, dica, titulo });
      fetchData();
      setNome("");
      setEmail("");
      setTitulo("");
      setTipo("");
      setDica("");
    } catch (error) {
      console.log("Não foi")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo.."
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail.."
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o título de sua mensagem.."
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tipo de dica</Text>
        <Picker
          style={styles.input}
          selectedValue={tipo}
          onValueChange={(value) => setTipo(value)}
        >
          <Picker.Item label="Escolha o tipo de dica" value="" enabled={false} />
          <Picker.Item label="Dicas de Jardinagem" value="jardinagem" />
          <Picker.Item label="Dicas de Plantio" value="plantio" />
          <Picker.Item label="Dicas sobre Árvores" value="arvores" />
          <Picker.Item label="Dicas de Adubagem" value="adubagem" />
          <Picker.Item label="Dicas de Regadura" value="regadura" />
          <Picker.Item label="Dicas de Controle de Pragas" value="pragas" />
          <Picker.Item label="Dicas sobre Preparo do Solo" value="solo" />
          <Picker.Item label="Dicas sobre Ferramentas de Jardinagem" value="ferramentas" />
          <Picker.Item label="Dicas Gerais de Cuidados com Plantas" value="cuidados" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Suas dicas e conhecimentos</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Nos conte o que você considera relevante"
          multiline
          numberOfLines={3}
          value={dica}
          onChangeText={(text) => setDica(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>ENVIAR CONHECIMENTO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  submitButton: {
    borderRadius: 8,
    borderWidth: 0,
    padding: 12,
    backgroundColor: '#ADFFB0',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyForm;
