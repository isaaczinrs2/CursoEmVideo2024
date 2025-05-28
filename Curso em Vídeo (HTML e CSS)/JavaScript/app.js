// App.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const App = () => {
  const data = [
    { id: '1', title: 'CAMISA PALMEIRAS PUMA I 24/25 - TORCEDOR', price: 'R$ 369,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/181263-800-800/_0015_777271_01.jpg?v=638418776142900000' },
    { id: '2', title: 'CAMISA PALMEIRAS PUMA II 24/25 - TORCEDOR', price: 'R$ 369,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/181346-1000-1000/_0029_777264_01.jpg?v=638418776588670000' },
    { id: '3', title: 'CAMISA PALMEIRAS PUMA III 23/24 - TORCEDOR', price: 'R$ 349,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/179576-800-800/774518_01.jpg?v=638285162492330000' },
    { id: '4', title: 'Short Palmeiras Puma I 24/25 - Torcedor Infantil', price: 'R$ 169,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/181444-380-380/_0001_777278_01.jpg?v=638418777082870000' },
    { id: '5', title: 'Camisa Palmeiras Torcedor Puma I 23/24 - Manga Longa', price: 'R$ 299,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/178665-1000-1000/776627_01.jpg?v=638211644354370000' },
    { id: '6', title: 'Camisa Palmeiras Puma III 24/25 Torcedor', price: 'R$ 369,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/186234-300-300/780968_01.jpg?v=638600398006330000' },
    { id: '7', title: 'Camisa Goleiro I Palmeiras Puma 24/25 - Jogador', price: 'R$ 499,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/181196-1000-1000/_0057_777235_01.jpg?v=638418775801830000' },
    { id: '8', title: 'Camisa Goleiro II Palmeiras Puma 24/25 Jogador', price: 'R$ 499,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/181206-1000-1000/_0059_777234_01.jpg?v=638418775847030000' },
    { id: '9', title: 'Meião III Palmeiras Puma 24/25', price: 'R$ 59,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/186331-1000-1000/780967_01.jpg?v=638600410107230000' },
    { id: '10', title: 'Blusa Palmeiras Puma 24/25', price: 'R$ 799,90', image: 'https://lojapalmeiras.vteximg.com.br/arquivos/ids/184551-1000-1000/778008_09.jpg?v=638499938300400000' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PALMEIRAS STORE</Text>
        <View style={styles.bar}></View>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png' }} // Exemplo de logo do Palmeiras
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.subtitle}>O MAIOR CAMPEÃO DO BRASIL</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.image }}
              style={styles.itemImage}
            />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 38,
    flex: 1,
    backgroundColor: '#025928',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  bar: {
    width: 3,
    height: 40,
    backgroundColor: '#8FBFA9',
    marginHorizontal: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  item: {
    borderWidth: 3,
    borderColor: '#8FBFA9',
    backgroundColor: '#428C6A',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 300, // Aumenta o tamanho da imagem
    height: 300, // Aumenta o tamanho da imagem
    marginBottom: 20, // Espaçamento entre a imagem e os detalhes
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
