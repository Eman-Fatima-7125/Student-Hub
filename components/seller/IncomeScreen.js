import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LineChart, BarChart } from "react-native-chart-kit";

export default function IncomeScreen() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Income Overview</Text>

      {/* Summary Cards from income.html */}
      <View style={styles.cardRow}>
        <Card style={styles.statsCard}>
          <Text style={styles.label}>Total Revenue</Text>
          <Text style={[styles.value, {color: '#198754'}]}>$12,450</Text>
        </Card>
        <Card style={styles.statsCard}>
          <Text style={styles.label}>Total Orders</Text>
          <Text style={[styles.value, {color: '#ffc107'}]}>89</Text>
        </Card>
      </View>

      {/* Revenue Trend Chart */}
      <Text style={styles.chartTitle}>Revenue Trend (Last 7 Days)</Text>
      <LineChart
        data={{
          labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
          datasets: [{ data: [200, 400, 350, 500, 700, 650, 800] }]
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chartStyle}
      />

      {/* Orders Breakdown */}
      <Text style={styles.chartTitle}>Orders Breakdown</Text>
      <BarChart
        data={{
          labels: ["Pend", "Conf", "Deliv", "Canc"],
          datasets: [{ data: [12, 45, 30, 2] }]
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chartStyle}
      />
    </ScrollView>
  );
}

const chartConfig = {
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(25, 135, 84, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16 },
  propsForDots: { r: "6", strokeWidth: "2", stroke: "#198754" }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 15 },
  mainTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statsCard: { flex: 0.48, padding: 15, alignItems: 'center' },
  label: { fontSize: 12, color: '#6c757d' },
  value: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  chartTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10, color: '#444' },
  chartStyle: { marginVertical: 8, borderRadius: 16, elevation: 3 }
});