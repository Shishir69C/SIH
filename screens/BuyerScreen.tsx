import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const BuyerScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch('http://10.0.2.2:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Available Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button
              title="Buy"
              onPress={() => alert(`Buying ${item.name}`)}
            />
          </View>
        )}
      />
      <Button
        title="Go to Seller Screen"
        onPress={() => navigation.navigate('Seller')}
      />
    </View>
  );
};

export default BuyerScreen;
