import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MenuScreen = props =>{
  return(
        <View style={styles.screen}>
        <Text>Login Screen</Text>
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

  export default MenuScreen;