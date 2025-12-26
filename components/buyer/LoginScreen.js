import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';

export default function SellerLoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text variant="headlineSmall" style={styles.title}>Seller Login</Text>
        <TextInput label="Email" mode="outlined" style={styles.input} />
        <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
        <Button mode="contained" buttonColor="#198754" style={styles.btn} 
                onPress={() => navigation.navigate('SellerDashboard')}>
          Login
        </Button>
        <Text style={styles.link} onPress={() => navigation.navigate('SellerSignup')}>
          Don't have an account? Register Here
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  card: { padding: 20, borderRadius: 12 },
  title: { textAlign: 'center', fontWeight: 'bold', marginBottom: 20 },
  input: { marginBottom: 15 },
  btn: { padding: 5 },
  link: { textAlign: 'center', marginTop: 15, color: '#0d6efd' }
});