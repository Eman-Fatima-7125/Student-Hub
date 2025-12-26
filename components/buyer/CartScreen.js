import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, IconButton, Button, Divider } from 'react-native-paper';

export default function CartScreen() {
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>My Cart</Text>
        
        {/* Cart Item Example */}
        <View style={styles.cartItem}>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.img} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text variant="titleMedium">Chocolate Cake</Text>
            <Text style={{color: '#666'}}>Rs. 1200</Text>
            <View style={styles.qtyRow}>
              <IconButton icon="minus-circle" size={24} onPress={() => qty > 1 && setQty(qty - 1)} />
              <Text style={{fontSize: 18}}>{qty}</Text>
              <IconButton icon="plus-circle" size={24} onPress={() => setQty(qty + 1)} />
            </View>
          </View>
          <IconButton icon="delete" iconColor="red" />
        </View>
      </ScrollView>

      {/* Footer Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text>Subtotal (1 item):</Text>
          <Text style={{fontWeight: 'bold'}}>Rs. {1200 * qty}</Text>
        </View>
        <Button mode="contained" buttonColor="#2f4f2f" style={{marginTop: 10}}>
          Check Out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', margin: 20 },
  cartItem: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  img: { width: 80, height: 80, borderRadius: 8 },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  summary: { padding: 20, borderTopWidth: 2, borderColor: '#ccc' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between' }
});