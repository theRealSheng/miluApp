import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

const Carousel = ({ heading, list }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>
      {`${heading.charAt(0).toUpperCase()}${heading.slice(1).toLowerCase()}`}
    </Text>
    <ScrollView horizontal style={styles.carousel}>
      {list}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    marginTop: 15,
    marginLeft: 15,
  },
  heading: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10
  },
  carousel: {
    flex: 1
  }
});

export { Carousel };