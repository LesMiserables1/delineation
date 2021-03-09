import { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './lib/tailwind';
import { useHover } from "react-native-web-hooks";

export default function App() {
  const ref = useRef(null);
  const isHovered = useHover(ref);

  return (
    <View style={tailwind('bg-blue-500 flex-1 items-center justify-center')}>
      <Text ref={ref} style={tailwind('text-black hover:text-orange', { hover: isHovered })}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
