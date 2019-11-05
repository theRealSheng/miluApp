import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants';
import { SETTINGS } from '../../utils';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.gold} />
    <Text style={styles.loading}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: SETTINGS.W_Height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  }
});

export { Loading };