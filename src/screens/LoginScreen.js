import React, { useState } from "react";
import { Button, TextInput} from "react-native-paper";
import { StyleSheet, View } from "react-native";

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style = {styles.container}>
      <TextInput style = {styles.textInput}
        label="Usuario"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput style = {styles.textInput}
        label="Contraseña"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button  style = {styles.submitButton}
        mode="contained"
        onPress={() => props.navigation.navigate({routeName:'HomeScreen'})}
      >Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: '15%',
    margin: '5%'
  },
  textInput:{
    marginBottom: '5%'
  }, 
  submitButton:{ 
    marginTop: '10%'
  }
})

export default LoginScreen;
