import React from "react";
import { Card, Title,  Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Card>
        <Card.Actions className="firstSubject">
          <Title>Histoira</Title>
          <Button>Vér Más</Button>
        </Card.Actions>
        <Card.Actions className="secondSubject">
          <Title>Arte</Title>
          <Button>Vér Más</Button>
        </Card.Actions>
        <Card.Actions className="thirdSubject">
          <Title>Química</Title>
          <Button>Vér Más</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    margin: "5%",
  }
});

export default HomeScreen;
