import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolFormData } from "../interface/register";

export const useValidate = () => {
  const validationSchema = yup.object({
    tipe_sekolah: yup.string().required("Tipe Sekolah is required"),
    nama_sekolah: yup.string().required("Namakolah is required"),
    alamat: yup.string().required("Alamat is required"),
    kode_pos: yup
      .string()
      .required("Kode Pos is required")
      .matches(
        /^\d{1,5}$/,
        "Kode Pos harus berupa angka dengan maksimal 5 karakter"
      ),
    provinsi: yup.string().required("Provinsi is required"),
    kota_kabupaten: yup.string().required("Kota/Kabupaten is required"),
    no_telp: yup
      .string()
      .required("Nomor Telepon is required")
      .matches(
        /^[0-9,-]+$/,
        "Nomor Telepon harus angka, boleh mengandung '-' dan ','"
      ),
    email_sekolah: yup.string().email("Email is not valid").required(),
    facebook: yup.string().required("Facebook is required"),
    jumlah_siswa: yup
      .number()
      .typeError("Jumlah Siswa harus angka")
      .required("Jumlah Siswa is required")
      .integer("Jumlah Siswa harus angka")
      .min(1, "Jumlah Siswa minimal 1")
      .max(100, "Jumlah Siswa maksimal 100"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  return { control, handleSubmit, errors };
};
