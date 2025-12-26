import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Avatar, IconButton, Card } from 'react-native-paper';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, is this jacket still available?', from: 'them', time: '10:00 AM' },
    { id: '2', text: 'Yes! Size M only. Want it?', from: 'me', time: '10:05 AM' },
    { id: '3', text: 'I will take it. How to pay?', from: 'them', time: '10:10 AM' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        from: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header logic from chat.html */}
      <View style={styles.header}>
        <Avatar.Image size={40} source={{ uri: 'https://i.pravatar.cc/150?img=12' }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.headerName}>Ayesha Khan</Text>
          <Text style={styles.headerStatus}>Online</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.from === 'me' ? styles.sent : styles.received]}>
            <Text style={{ color: item.from === 'me' ? 'white' : 'black' }}>{item.text}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 15 }}
      />

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <IconButton icon="send" iconColor="#0d6efd" size={28} onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7fb' },
  header: { flexDirection: 'row', padding: 15, backgroundColor: '#0d6efd', alignItems: 'center' },
  headerName: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  headerStatus: { color: '#e0e0e0', fontSize: 12 },
  bubble: { padding: 10, borderRadius: 15, marginBottom: 10, maxWidth: '80%' },
  sent: { alignSelf: 'flex-end', backgroundColor: '#0d6efd' },
  received: { alignSelf: 'flex-start', backgroundColor: '#e9ecef' },
  timeText: { fontSize: 10, alignSelf: 'flex-end', marginTop: 4, color: '#ccc' },
  inputArea: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white' },
  input: { flex: 1, backgroundColor: '#eee', borderRadius: 20, paddingHorizontal: 15, height: 40 }
});