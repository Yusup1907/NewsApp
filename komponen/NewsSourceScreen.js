import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsSourceScreen = ({ route, navigation }) => {
  const [newsSources, setNewsSources] = useState([]);
  const [filteredNewsSources, setFilteredNewsSources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { category } = route.params;

  useEffect(() => {
    fetchNewsSources();
  }, []);

  const fetchNewsSources = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/sources', {
        params: {
          apiKey: 'e9a664adc6fb40de8ef12f7845b4577f',
          category: category.id,
          language: 'en',
        },
      });
      setNewsSources(response.data.sources);
      setFilteredNewsSources(response.data.sources);
    } catch (error) {
      console.error('Error fetching news sources:', error);
    }
  };

  const handleNewsSourcePress = (newsSource) => {
    navigation.navigate('NewsArticles', { newsSource });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const filteredSources = newsSources.filter(source =>
      source.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNewsSources(filteredSources);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Sources for {category.category}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search news sources"
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
      <FlatList
        data={filteredNewsSources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.sourceItem}
            onPress={() => handleNewsSourcePress(item)}
          >
            <Text style={styles.sourceText}>{item.name}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  searchInput: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  sourceItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sourceText: {
    fontSize: 18,
  },
});

export default NewsSourceScreen;
