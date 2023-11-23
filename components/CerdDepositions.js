import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardDepositions = ({ title, deposition, name, type }) => {
  console.log("dsa")
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 12, gap: '10px' }}>
        <Text style={styles.title}>📌{type}</Text>
        <Text style={styles.subtitle}>❝{title}❞</Text>
      </View>
      <Text style={styles.deposition}>{deposition}</Text>
      <Text style={styles.name}>~ {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
  },
  deposition: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    textAlign: 'right',
    color: '#888888',
  },
});

export default CardDepositions;
