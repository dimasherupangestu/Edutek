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
import { useRegister } from "../hooks/useRegister";
import { useValidate } from "../hooks/useValidate";
import FormInput from "./FormInput";
import { ApiSiswa } from "../libs/axios";

const FormRegister = ({ navigation }: { navigation: any }) => {
  const { control, handleSubmit, errors } = useValidate();
  const {
    GetKota,
    GetApiWilayah,
    getProvinsi,
    getKota,
    idProvinsi,
    setIdProvinsi,
    setSiswa,
  } = useRegister();

  const onSubmit = async (data: any) => {
    try {
      const response = await ApiSiswa.post("/siswa", data);
      setSiswa(response.data);
      console.log("tes", response.data);
      navigation.navigate("DetailScreen");
    } catch (error) {
      console.log("Unexpected error:", error);
    }
  };

  useEffect(() => {
    GetApiWilayah();
    GetKota();
  }, [idProvinsi]);

  const provinsiOptions = getProvinsi.map((provinsi: any) => ({
    label: provinsi.name,
    value: provinsi.id,
  }));
  const kotaOptions = getKota.map((kota: any) => ({
    label: kota.name,
    value: kota.id,
  }));
  return (
    <>
      <Box
        width={"80%"}
        display="flex"
        alignItems="center"
        borderRadius={16}
        bg="#93adc5"
        px={10}>
        <Heading mt={8}>Register Sekolah</Heading>
        <Box>
          <Avatar bgColor="#ddd" size="md" borderRadius="$full">
            <MaterialCommunityIcons name="image-plus" size={24} color="black" />
          </Avatar>
        </Box>
        <Box width={"100%"} px={6} mt={4} pb={20}>
          <FormControl>
            <FormControlLabel mb="$1" mt="$3">
              <FormControlLabelText>Tipe Sekolah :</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="tipe_sekolah"
              control={control}
              render={({ field }) => (
                <Select
                  selectedValue={field.value}
                  onValueChange={field.onChange}
                  defaultValue="">
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select Tipe Sekolah" />
                    <SelectIcon mr="$3" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Nasional" value="nasional" />
                      <SelectItem label="Internasional" value="internasional" />
                      <SelectItem label="Madrasah" value="madrasah" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />

            <FormInput
              control={control}
              name={"nama_sekolah"}
              label={"Nama Sekolah :"}
              placeholder={"Masukan Nama Sekolah"}
              errors={errors}
            />

            <FormInput
              control={control}
              name={"alamat"}
              label={"Alamat :"}
              placeholder={"Masukan Alamat Sekolah"}
              errors={errors}
            />

            <FormInput
              control={control}
              name={"kode_pos"}
              label={"Kode Pos :"}
              placeholder={"Masukan kode pos Sekolah"}
              errors={errors}
            />

            <FormControlLabel mb={4} mt="$2">
              <FormControlLabelText>Provinsi :</FormControlLabelText>
            </FormControlLabel>

            <Controller
              name="provinsi"
              control={control}
              render={({ field }) => (
                <Select
                  selectedValue={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    setIdProvinsi(value);
                  }}
                  defaultValue="">
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select Provinsi" />
                    <SelectIcon mr="$3" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <ScrollView>
                        {provinsiOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            label={option.label}
                            value={option.value}
                          />
                        ))}
                      </ScrollView>
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />

            <FormControlLabel mb={4} mt="$2">
              <FormControlLabelText>Kota/Kabupaten :</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="kota_kabupaten"
              control={control}
              render={({ field }) => (
                <Select
                  selectedValue={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  defaultValue="">
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select Kota" />
                    <SelectIcon mr="$3" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <ScrollView>
                        {kotaOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            label={option.label}
                            value={option.value}
                          />
                        ))}
                      </ScrollView>
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />

            <FormInput
              control={control}
              name={"no_telp"}
              label={"No Telpon Sekolah :"}
              placeholder={"Masukan No Telpon Sekolah"}
              errors={errors}
            />

            <FormInput
              control={control}
              name={"email_sekolah"}
              label={"Email Sekolah :"}
              placeholder={"Masukan Email Sekolah"}
              errors={errors}
            />

            <FormInput
              control={control}
              name={"facebook"}
              label={"facebook :"}
              placeholder={"Masukan Facebook"}
              errors={errors}
            />
            <FormInput
              control={control}
              name={"jumlah_siswa"}
              label={"Jumlah Siswa :"}
              placeholder={"Masukan jumlah siswa sekoalah"}
              errors={errors}
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Button bg="#222" mt="$4" borderRadius={"$sm"}>
                <ButtonText>Start Game</ButtonText>
              </Button>
            </TouchableOpacity>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default FormRegister;
