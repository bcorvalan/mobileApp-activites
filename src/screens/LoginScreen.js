import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const LoginScreen = () => {
  const [username, setUsername]= useState('') 
  const [password, setPassword]= useState('') 

  useSelector(state => console.log(state))
    return(
        <View style={styles.screen}>
        <TextInput
        placeholder='Enter username'
        value= {username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
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

