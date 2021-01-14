import * as React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from "./app.json";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
