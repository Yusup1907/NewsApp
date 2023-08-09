import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../components/CategoryScreen';
import NewsSourceScreen from '../components/NewsArticleScreen';
import NewsArticleScreen from '../components/NewsArticleScreen'; 

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="NewsSources" component={NewsSourceScreen} />
        <Stack.Screen name="NewsArticles" component={NewsArticleScreen} /> {/* Tambahkan layar NewsArticleScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
