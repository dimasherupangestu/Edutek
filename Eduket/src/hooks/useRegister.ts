import axios from "axios";
import { ApiSiswa } from "../libs/axios";
import { useState } from "react";

export const useRegister = () => {
  const [getProvinsi, setGetProvinsi] = useState([]);
  const [idProvinsi, setIdProvinsi] = useState("");
  const [getKota, setGetKota] = useState([]);
  const [getAllSiswa, setGetAllSiswa] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const GetDataUser = async () => {
    try {
      const response = await ApiSiswa.get("/siswa");
      setGetAllSiswa(response.data.data);
      console.log("data", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const GetApiWilayah = async () => {
    try {
      const res = await axios.get(
        "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json"
      );
      // console.log(res.data);
      setGetProvinsi(res.data);
      if (res.data) {
        GetKota();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetKota = async () => {
    try {
      const res = await axios.get(
        `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${idProvinsi}.json`
      );
      // console.log("kota", res.data);
      setGetKota(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    GetKota,
    GetApiWilayah,
    GetDataUser,
    getProvinsi,
    idProvinsi,
    getKota,
    getAllSiswa,
    setIdProvinsi,
    setSiswa,
  };
};
