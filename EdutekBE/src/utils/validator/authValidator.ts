import Joi = require("joi");

export const registerSchema = Joi.object({
  tipe_sekolah: Joi.string().required(),
  nama_sekolah: Joi.string().required(),
  alamat: Joi.string().required(),
  kode_pos: Joi.string().required(),
  provinsi: Joi.string().required(),
  kota_kabupaten: Joi.string().required(),
  no_telp: Joi.string().required(),
  email_sekolah: Joi.string().required(),
  facebook: Joi.string().required(),
  jumlah_siswa: Joi.number().required(),
  gambar: Joi.string().optional(),
});
