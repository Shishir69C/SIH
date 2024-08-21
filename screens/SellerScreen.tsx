import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SellerScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    const product = { name, description, price };

    // Send product data to the backend
    fetch('http://10.0.2.2:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Product added successfully');
          setName('');
          setDescription('');
          setPrice('');
        } else {
          alert('Failed to add product');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Add New Product</Text>
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={text => setPrice(text)}
        style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default SellerScreen;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

