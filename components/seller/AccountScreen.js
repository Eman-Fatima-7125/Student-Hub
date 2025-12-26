import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Card, Button, Divider, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <View style={styles.header}>
          <Avatar.Image size={120} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text variant="headlineMedium" style={styles.name}>Seller Name</Text>
          <Text style={styles.department}>Department: Fashion</Text>
        </View>

        <Card.Content>
          <View style={styles.infoRow}>
             <MaterialCommunityIcons name="email" size={20} color="#666" />
             <Text style={styles.infoText}>seller@example.com</Text>
          </View>
          <View style={styles.infoRow}>
             <MaterialCommunityIcons name="phone" size={20} color="#666" />
             <Text style={styles.infoText}>+92 300 1234567</Text>
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.label}>Registration No:</Text>
          <Text style={styles.value}>REG-2025-001</Text>
          
          <Text style={styles.label}>Niche:</Text>
          <Text style={styles.value}>Clothing & Accessories</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button mode="contained" buttonColor="#198754" icon="pencil">Edit Profile</Button>
          <Button mode="outlined" textColor="red" icon="logout" style={{marginTop: 10}}>Logout</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 15 },
  profileCard: { padding: 10, borderRadius: 15, elevation: 4 },
  header: { alignItems: 'center', marginVertical: 20 },
  name: { fontWeight: 'bold', marginTop: 10 },
  department: { color: '#666', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  infoText: { marginLeft: 10, color: '#444' },
  divider: { my: 15 },
  label: { fontWeight: 'bold', color: '#6c757d', marginTop: 10 },
  value: { marginBottom: 10, fontSize: 16 },
  actions: { flexDirection: 'column', width: '100%' }
});