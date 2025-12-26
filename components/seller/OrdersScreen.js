import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Badge, Button, List } from 'react-native-paper';

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryRow}>
        <Card style={styles.sumCard}><Text style={styles.sumVal}>2</Text><Text>Pending</Text></Card>
        <Card style={styles.sumCard}><Text style={[styles.sumVal, {color: 'green'}]}>1</Text><Text>Delivered</Text></Card>
      </View>

      <Text variant="titleLarge" style={styles.title}>Pending Orders</Text>
      
      <Card style={styles.orderCard}>
        <List.Item
          title="Order #1001"
          description="Bag, Hijab • Delivery: 2025-10-05"
          left={props => <List.Icon {...props} icon="package-variant" />}
        />
        <View style={styles.btnRow}>
          <Button mode="contained" buttonColor="#0d6efd" compact onPress={() => {}}>Confirm</Button>
          <Button mode="outlined" textColor="red" compact onPress={() => {}}>Cancel</Button>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  sumCard: { flex: 0.48, padding: 15, alignItems: 'center', textAlign: 'center' },
  sumVal: { fontSize: 24, fontWeight: 'bold', color: 'orange', textAlign: 'center' },
  title: { marginVertical: 15, fontWeight: 'bold' },
  orderCard: { marginBottom: 10 },
  btnRow: { flexDirection: 'row', justifyContent: 'flex-end', padding: 10, gap: 10 }
});