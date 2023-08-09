import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const NewsArticleScreen = ({ route }) => {
  const [articles, setArticles] = useState([]);
  const { newsSource } = route.params;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: 'e9a664adc6fb40de8ef12f7845b4577f',
          sources: newsSource.id,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleArticlePress = (article) => {
    // Navigasi ke layar WebViewScreen dengan artikel yang dipilih
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Articles from {newsSource.name}</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.articleItem}
            onPress={() => handleArticlePress(item)}
          >
            <Text style={styles.articleTitle}>{item.title}</Text>
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
  articleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  articleTitle: {
    fontSize: 18,
  },
});

export default NewsArticleScreen;
