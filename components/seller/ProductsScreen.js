import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Searchbar, Badge, IconButton } from 'react-native-paper';

export default function ProductsScreen() {
  const [search, setSearch] = useState('');
  const [products] = useState([
    { id: '1', name: 'Leather Bag', stock: 12, lastEdited: '2025-09-28' },
    { id: '2', name: 'Books Set', stock: 0, lastEdited: '2025-09-25' },
    { id: '3', name: 'Hijab', stock: 3, lastEdited: '2025-09-30' },
  ]);

  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search products..." onChangeText={setSearch} value={search} style={styles.search} />
      
      <FlatList
        data={products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <Card style={styles.pCard}>
            <View style={styles.row}>
              <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.img} />
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text variant="titleMedium" style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text variant="bodySmall">Stock: {item.stock}</Text>
                {item.stock < 5 && (
                  <Badge style={{ backgroundColor: item.stock === 0 ? 'red' : 'orange', alignSelf: 'flex-start' }}>
                    {item.stock === 0 ? 'Out of Stock' : 'Low Stock'}
                  </Badge>
                )}
              </View>
              <View style={styles.actions}>
                <IconButton icon="pencil" size={20} onPress={() => {}} />
                <IconButton icon="delete" iconColor="red" size={20} onPress={() => {}} />
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  search: { marginBottom: 15 },
  pCard: { marginBottom: 10, padding: 10 },
  row: { flexDirection: 'row', alignItems: 'center' },
  img: { width: 60, height: 60, borderRadius: 8 },
  actions: { flexDirection: 'row' }
});