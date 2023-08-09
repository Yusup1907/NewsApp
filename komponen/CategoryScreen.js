import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/sources', {
        params: {
          apiKey: 'e9a664adc6fb40de8ef12f7845b4577f',
        },
      });
      setCategories(response.data.sources);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('NewsSources', { category });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => handleCategoryPress(item)}
          >
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
  },
});

export default CategoryScreen;
