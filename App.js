import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';

// --- Buyer Screens ---
import HomeScreen from './components/buyer/HomeScreen';
import AllProductsScreen from './components/buyer/AllProductsScreen';
import CartScreen from './components/buyer/CartScreen';
import ProductDetailScreen from './components/buyer/ProductDetailScreen';
import SellerLoginScreen from './components/buyer/LoginScreen'; 

// --- Seller Screens ---
import AccountScreen from './components/seller/AccountScreen';
import OrdersScreen from './components/seller/OrdersScreen';
import ProductsScreen from './components/seller/ProductsScreen';
import IncomeScreen from './components/seller/IncomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SellerTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#198754', headerShown: true }}>
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ tabBarIcon: ({color}) => <MaterialCommunityIcons name="cart-outline" color={color} size={26}/> }} />
      <Tab.Screen name="Inventory" component={ProductsScreen} options={{ tabBarIcon: ({color}) => <MaterialCommunityIcons name="package-variant" color={color} size={26}/> }} />
      <Tab.Screen name="Income" component={IncomeScreen} options={{ tabBarIcon: ({color}) => <MaterialCommunityIcons name="cash-multiple" color={color} size={26}/> }} />
      <Tab.Screen name="Profile" component={AccountScreen} options={{ tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-circle" color={color} size={26}/> }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Student Hub' }} />
          <Stack.Screen name="AllProducts" component={AllProductsScreen} options={{ title: 'All Products' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Details' }} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="SellerLogin" component={SellerLoginScreen} options={{ title: 'Seller Login' }} />
          <Stack.Screen name="SellerDashboard" component={SellerTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}