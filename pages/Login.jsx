import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const isValidEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://bit.ly/2E3scwW',
      }}
      style={styles.background}>
      <View style={{backgroundColor: 'black'}}>
        <Image
          source={{uri: 'https://bit.ly/2VdIFUK'}}
          style={{
            height: 35,
            width: 170,
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 15,
          }}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.logo}>Unlimited movies, TV shows and more</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#E50914',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
