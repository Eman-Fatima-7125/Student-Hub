import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Chip } from 'react-native-paper';

// --- Asli Images ke Paths ---
const PRODUCTS = [
  { id: '1', title: 'Handmade Bag', price: '1500', img: require('../../assets/bag.jpg') },
  { id: '2', title: 'Special Cake', price: '1200', img: require('../../assets/cake.jpg') },
  { id: '3', title: 'Jewelery Set', price: '2500', img: require('../../assets/jewelery.jpg') },
  { id: '4', title: 'Painting', price: '3000', img: require('../../assets/Paintings.jpg') },
];

export default function AllProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.header}>Our Collection</Text>
      
      {/* Category Filters */}
      <View style={{ height: 60 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
          <Chip icon="filter" style={styles.chip} onPress={() => {}}>All</Chip>
          <Chip style={styles.chip} onPress={() => {}}>Fashion</Chip>
          <Chip style={styles.chip} onPress={() => {}}>Food</Chip>
          <Chip style={styles.chip} onPress={() => {}}>Art</Chip>
        </ScrollView>
      </View>

      {/* Product Grid */}
      <FlatList
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={item.img} style={styles.img} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text variant="titleSmall" numberOfLines={1} style={styles.titleText}>{item.title}</Text>
              <Text variant="bodyMedium" style={styles.price}>Rs. {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 10 },
  header: { fontWeight: 'bold', color: '#198754', marginBottom: 10, textAlign: 'center' },
  filters: { marginBottom: 10 },
  chip: { marginRight: 8, height: 40, backgroundColor: '#e8f5e9' },
  card: { flex: 0.5, margin: 5, backgroundColor: 'white', borderRadius: 10, elevation: 3, overflow: 'hidden' },
  img: { width: '100%', height: 120 },
  cardContent: { padding: 10 },
  titleText: { fontWeight: '600' },
  price: { color: '#198754', fontWeight: 'bold', marginTop: 4 }
});