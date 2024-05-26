import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ViewBase } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import RootScreen from "./RootScreen";

export default function App() {
  return (
    <>
      <GluestackUIProvider config={config}>
        <RootScreen />
      </GluestackUIProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
