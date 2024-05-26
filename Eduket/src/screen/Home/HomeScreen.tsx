import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ButtonText } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
// import useHomeForm from "./hooks/useHomeForm";
import axios from "axios";
import { Controller } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { ApiSiswa } from "../../libs/axios";
import { useValidate } from "../../hooks/useValidate";
import Toast from "react-native-toast-message";
import { useRegister } from "../../hooks/useRegister";
import FormRegister from "../../components/FormRegister";
const HomeScreen = ({ navigation }: any) => {
  const { control, handleSubmit, errors } = useValidate();
  const { GetKota, GetApiWilayah, getProvinsi, getKota, idProvinsi } =
    useRegister();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          alt="image"
          source={require("../../../assets/bg1.png")}
          resizeMode="cover"
          style={styles.image}>
          <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Box
                width={"100%"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={4}>
                <Center height={160} top={11} mt={20}>
                  <Image
                    alt="icon3"
                    source={require("../../../assets/icon3.png")}
                    width={220}
                    height={160}
                  />
                </Center>
                <FormRegister navigation={navigation} />
              </Box>
            </ScrollView>
          </KeyboardAvoidingView>
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
  scrollView: {
    width: "100%",
  },
  but: {
    width: "100%",
    height: "100%",
    marginTop: 100,
  },
});

export default HomeScreen;
