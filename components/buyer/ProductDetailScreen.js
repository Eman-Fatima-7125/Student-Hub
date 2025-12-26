import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Button, List } from 'react-native-paper';

export default function ProductDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.mainImg} />
      
      <View style={styles.details}>
        <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>Classic Cotton T-Shirt</Text>
        <Text variant="titleLarge" style={styles.price}>Rs. 1,200</Text>
        <Text style={styles.desc}>
          A high-quality cotton t-shirt designed for everyday wear. Comfortable, stylish, and durable.
        </Text>

        <List.Accordion title="Select Size & Color">
          <List.Item title="Size: Medium" left={props => <List.Icon {...props} icon="ruler" />} />
          <List.Item title="Color: Red" left={props => <List.Icon {...props} icon="palette" />} />
        </List.Accordion>

        <Button mode="contained" buttonColor="#198754" icon="cart-plus" style={styles.btn}>
          Add to Cart
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mainImg: { width: '100%', height: 350 },
  details: { padding: 20 },
  price: { color: '#198754', fontWeight: 'bold', marginVertical: 10 },
  desc: { color: '#666', lineHeight: 22, marginBottom: 20 },
  btn: { marginTop: 20, padding: 5 }
});