import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsArticleScreen = ({ route, navigation }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { newsSource } = route.params;

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: 'e9a664adc6fb40de8ef12f7845b4577f',
          sources: newsSource.id,
          page,
        },
      });
      setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setLoading(false);
    }
  };

  const handleArticlePress = (article) => {
    navigation.navigate('WebView', { article });
  };

  const handleEndReached = () => {
    if (!loading) {
      setPage(page + 1);
    }
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
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
      {loading && <Text>Loading more articles...</Text>}
      {!loading && articles.length === 0 && <Text>No articles available.</Text>}
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
