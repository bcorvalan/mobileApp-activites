import React from 'react';
import { StyleSheet, View } from 'react-native';

//Falta agregar {useSelector , useDispatch}

const LoginScreen = (props) => {
    return(
        <View style={styles.screen}>
        <input
        placeholder='Enter username'
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <input
        placeholder='Enter password'
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <button
        title='Sign In' 
        onPress={() => useDispatch(login({'username': username, 'password': password }))}  
      />
      </View> 
    );
};
const styles = StyleSheet.create({
    screem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  export default LoginScreen;

