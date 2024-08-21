// src/TestApi.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const backendUrl = 'http://localhost:5000'; // Adjust if necessary

const TestApi = () => {
  const [response, setResponse] = useState('');

  const testAddProduct = async () => {
    try {
      const result = await axios.post(`${backendUrl}/api/seller/add-product`, {
        name: 'Sample Product',
        price: 29.99,
        description: 'This is a sample product.',
        sellerId: 'seller123'
      });
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  const testFetchProducts = async () => {
    try {
      const result = await axios.get(`${backendUrl}/api/buyer/products`);
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  const testBuyProduct = async () => {
    try {
      const result = await axios.post(`${backendUrl}/api/buyer/buy-product`, {
        productId: 'productId123',
        buyerId: 'buyer456'
      });
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Add Product" onPress={testAddProduct} />
      <Button title="Fetch Products" onPress={testFetchProducts} />
      <Button title="Buy Product" onPress={testBuyProduct} />
      <Text style={styles.response}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default TestApi;
