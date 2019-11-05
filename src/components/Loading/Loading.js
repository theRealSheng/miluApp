import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.gold} />
    <Text style={styles.loading}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  }
})

export { Loading };