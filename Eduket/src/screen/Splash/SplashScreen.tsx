import {
  Button,
  ButtonText,
  Text,
  Image as ImageGlu,
  Box,
  ButtonIcon,
  ButtonGroup,
} from "@gluestack-ui/themed";

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const SplashScreen = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          alt="image"
          source={require("../../../assets/bg1.png")}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.box}>
            <Image
              alt="logo"
              style={styles.logo!}
              source={require("../../../assets/logo1.png")}
            />
            <Text
              color="#222"
              fontFamily="sans-serif"
              fontSize={13}
              fontWeight="semibold">
              Education Technology
            </Text>

            <Box
              mt={"$3"}
              width={"80%"}
              height={"50%"}
              display="flex"
              alignItems="center">
              <ImageGlu
                alt="icon1"
                source={require("../../../assets/icon2.png")}
                width={300}
                resizeMethod="resize"
                ml={6}
                height={300}
              />

              <Button bgColor="#93adc5">
                <TouchableOpacity
                  onPress={() => navigation.navigate("HomeScreen")}>
                  <ButtonText>Get Started</ButtonText>
                </TouchableOpacity>
              </Button>
            </Box>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  box: {
    marginTop: 100,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    // backgroundColor: "red",
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default SplashScreen;
