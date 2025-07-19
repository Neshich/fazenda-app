import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, Button, TextInput, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [animals, setAnimals] = useState([]);
  const [token, setToken] = useState('');
  const [sex, setSex] = useState('M');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:8000/api/animals/', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => setAnimals(res.data));
    }
  }, [token]);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Animais cadastrados</Text>
      <FlatList
        data={animals}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.sex === 'M' ? 'Macho' : 'Fêmea'} - {item.weight}kg</Text>
        )}
      />
    </SafeAreaView>
  );
}
