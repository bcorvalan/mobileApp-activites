import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ActivitesScreen = props =>{
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

  export default ActivitesScreen;