import axios, { AxiosInstance } from "axios";

export const ApiSiswa = axios.create({
  baseURL: "http://192.168.1.8:9000/api/v1",
});
