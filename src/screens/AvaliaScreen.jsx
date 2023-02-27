import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function IMCTable() {
  const tableHead = ['Classificação', 'IMC', 'Grau de Obesidade'];
  const tableData = [
    ['Magreza', 'Menos de 18,5', '0'],
    ['Normal', '18,5 - 24,9', '0'],
    ['Sobrepeso', '25,0 - 29,9', 'I'],
    ['Obesidade Grau I', '30,0 - 34,9', 'II'],
    ['Obesidade Grau II', '35,0 - 39,9', 'III'],
    ['Obesidade Grau III', '40 ou mais', 'IV'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={tableData} textStyle={styles.text} />

      </Table>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});
