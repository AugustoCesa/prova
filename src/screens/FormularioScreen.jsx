import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function IMCForm() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setIMC(imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Altura (cm)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <TextInput
        label="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={calcularIMC}>
        Calcular IMC
      </Button>
      <TextInput
        label="IMC"
        value={imc}
        disabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

