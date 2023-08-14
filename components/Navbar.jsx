import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = menuOpen ? 0 : 1;
    Animated.spring(animatedValue, {
      toValue,
      friction: 5,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0], // Adjust this value to control the slide animation
  });

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
      }}>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/rC8RfiIxNgM8IL0yzI4M1brTtg0WWwmeRro_Rxe7ugk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy93aGl0/ZS1tZW51LWljb24v/d2hpdGUtbWVudS1p/Y29uLTQuanBn',
          }}
          style={{height: 35, width: 35, marginTop: 12}}></Image>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.menuContainer}>
          <Animated.View style={[styles.menu, {transform: [{translateY}]}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.link}>
              <Text style={styles.linkText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Movies')}
              style={styles.link}>
              <Text style={styles.linkText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tvseries')}
              style={styles.link}>
              <Text style={styles.linkText}>Tvseries</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Image
        source={{uri: 'https://bit.ly/2VdIFUK'}}
        style={{
          height: 35,
          width: 170,
          marginTop: 15,
          padding: 10,
          marginBottom: 10,
        }}></Image>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    backgroundColor: 'transparent', // Make the container transparent to avoid blocking touch events
    top: 80,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingTop: 5,
  },
  logo: {
    width: 40,
    height: 80,
  },
  menu: {
    backgroundColor: 'black',
    zIndex: 2,
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  linkText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Navbar;
