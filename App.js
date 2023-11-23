import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';
import CardDepositions from './components/CerdDepositions';
import { getDicas } from './service/getDepoiments';
import MyForm from './components/Form';

export default function App() {
  const [dicas, setDicas] = useState([]);

  async function fetchData() {
    console.log("buscou")
    try {
      const data = await getDicas();
      console.log("dicas", data);
      setDicas(data)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <View style={styles.navbar}>
        <Text style={styles.heading}>NatureAI</Text>
        <Image source={require('./assets/brasil.svg')} style={styles.navbarImage} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.bodyTexts}>
            <Text style={styles.heading}>Bem-vindo</Text>
            <Text style={styles.subheading}>Um novo jeito de pensar sobre cultivo e agricultura.</Text>
          </View>
          <Image source={require('./assets/img1.png')} style={styles.imgbody} />
        </View>

        <View style={styles.containerDepoiments}>
        <MyForm fetchData={fetchData} />
        </View>

        <View style={styles.containerDepoiments}>
          {dicas.map(
            (dica, index) =>
              <CardDepositions
                key={index}
                title={dica.titulo}
                type={dica.tipo}
                deposition={dica.dica}
                name={dica.nome}
              />
          )}
        </View>

        <Chat />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#95DE38',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
  },
  navbarImage: {
    width: 45,
    height: 45,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  body: {
    width: '100%',
    backgroundColor: '#7AD606',
    alignItems: 'center',
    padding: '20%'
  },
  bodyTexts: {
    width: '100%',
    alignItems: 'flex-start',
    gap: '30px'
  },
  imgbody: {
    width: 300,
    height: 300,
  },
  containerDepoiments: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    gap: 10
  },
})
