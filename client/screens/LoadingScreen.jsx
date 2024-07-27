import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 3000, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('SignUp');
      
    });
  }, [logoAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/saspaie-1-1.png')}
        style={[styles.logo, { opacity: logoAnim }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 300,
    height: 80,
  },
});

export default LoadingScreen;
