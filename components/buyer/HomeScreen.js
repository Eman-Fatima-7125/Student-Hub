import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80' }} 
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text variant="displaySmall" style={styles.heroTitle}>Student Startup Hub</Text>
          <Text variant="titleMedium" style={styles.heroSub}>Buy & Sell Campus Essentials</Text>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('AllProducts')} 
            style={styles.mainButton}
            buttonColor="#198754"
          >
            Shop Now
          </Button>
        </View>
      </ImageBackground>

      {/* Featured Categories */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>Featured Categories</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('AllProducts')}>
            <Card style={styles.innerCard}>
              <Card.Content>
                <Text variant="titleMedium" style={styles.centerText}>Accessories</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('SellerLogin')}>
            <Card style={[styles.innerCard, styles.sellerCard]}>
              <Card.Content>
                <Text variant="titleMedium" style={[styles.centerText, styles.sellerText]}>Start Selling</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </View>

      {/* Seller Promo Section */}
      <Card style={styles.promoCard}>
        <Card.Content>
          <Text variant="headlineSmall" style={styles.promoTitle}>Want to earn money?</Text>
          <Text variant="bodyLarge">Turn your skills into profit. Start selling your handmade items or services today!</Text>
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('SellerLogin')} 
            style={styles.promoButton}
            textColor="#198754"
          >
            Start Selling
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  hero: { width: '100%', height: 300, justifyContent: 'center' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heroTitle: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  heroSub: { color: 'white', marginBottom: 20, textAlign: 'center' },
  mainButton: { paddingHorizontal: 20 },
  section: { padding: 20 },
  sectionTitle: { marginBottom: 15, fontWeight: 'bold', color: '#333' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  categoryCard: { width: '48%' },
  innerCard: { backgroundColor: '#f8f9fa', borderRadius: 12 },
  sellerCard: { borderColor: '#198754', borderWidth: 1 },
  centerText: { textAlign: 'center' },
  sellerText: { color: '#198754', fontWeight: 'bold' },
  promoCard: { margin: 20, backgroundColor: '#e8f5e9', borderRadius: 15 },
  promoTitle: { color: '#1b5e20', fontWeight: 'bold', marginBottom: 10 },
  promoButton: { marginTop: 15, borderColor: '#198754' }
});