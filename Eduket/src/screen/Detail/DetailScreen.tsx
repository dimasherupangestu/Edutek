import {
  Box,
  Text,
  View,
  Center,
  Image,
  ImageBackground,
  Card,
  Heading,
  HStack,
} from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRegister } from "../../hooks/useRegister";
import { SchoolFormData } from "../../interface/register";
import AntDesign from "@expo/vector-icons/AntDesign";
const DetailScreen = ({ navigation }: { navigation: any }) => {
  const { GetDataUser, getAllSiswa } = useRegister();

  useEffect(() => {
    GetDataUser();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          alt="image"
          source={require("../../../assets/bg1.png")}
          resizeMode="cover"
          style={styles.image}>
          <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
            <Box
              width={"100%"}
              display="flex"
              position="relative"
              top={30}
              justifyContent="center">
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}>
                <Text fontWeight="bold" color="black" ml={20}>
                  <AntDesign name="arrowleft" size={35} color="black" />
                </Text>
              </TouchableOpacity>
            </Box>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Box
                width={"100%"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={4}
                mt={5}>
                <Center width={"100%"} mt={10}>
                  <Image
                    alt="icon3"
                    source={require("../../../assets/logo1.png")}
                    width={150}
                    resizeMode="contain"
                    height={150}
                  />
                  <Text mt={5} fontWeight="bold" color="#000">
                    Daftar Edutek Sekolah
                  </Text>
                </Center>
                {getAllSiswa &&
                  getAllSiswa?.map((siswa: SchoolFormData, index: number) => (
                    <Card
                      key={index}
                      width={"80%"}
                      variant="elevated"
                      bg="#e8e8e8"
                      my={10}>
                      <Heading mb="$1" size="md">
                        {siswa.nama_sekolah}
                      </Heading>
                      <HStack>
                        <Text size="sm">Alamat: {siswa.alamat}</Text>
                      </HStack>
                      <Text size="sm">
                        Email Sekolah: {siswa.email_sekolah}
                      </Text>
                      <Text size="sm">No Sekolah: {siswa.no_telp}</Text>
                      <Text size="sm">Jumlah Siswa: {siswa.jumlah_siswa}</Text>
                    </Card>
                  ))}
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

export default DetailScreen;
