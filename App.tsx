import React from 'react';
import { StyleSheet, View } from 'react-native';
import { nw } from './normalize.helper.ts';
import { CategoryCard } from './src/components/CategoryCard/CategoryCard';
import { Navigation } from './src/components/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: '100%',
    padding: nw(10),
  },
});

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <CategoryCard />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>

    </View>
  );

}

export default App;
