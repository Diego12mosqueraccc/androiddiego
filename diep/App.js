import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ContactList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#DFFFD6", // Fondo verde claro
  },
});

export default App;
