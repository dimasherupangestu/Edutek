import { Repository } from "typeorm";
import { Siswa } from "../entity/Siswa";
import { AppDataSource } from "../data-source";
import { validate } from "../utils/validete";
import { registerSchema } from "../utils/validator/authValidator";
import cloudinary from "../libs/cloudinary";

export default new (class SiswaService {
  private readonly SiswaRepository: Repository<Siswa> =
    AppDataSource.getRepository(Siswa);

  async getAll(): Promise<object> {
    try {
      const response = await this.SiswaRepository.find();
      return {
        message: "success getting all Siswa",
        data: response,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(reqBody) {
    const isValid = validate(registerSchema, reqBody);

    try {
      let valid;
      if (isValid.gambar) {
        cloudinary.upload();
        const cloudinaryRes = await cloudinary.destination(isValid.gambar);
        valid = {
          tipe_sekolah: isValid.tipe_sekolah,
          nama_sekolah: isValid.nama_sekolah,
          alamat: isValid.alamat,
          kode_pos: isValid.kode_pos,
          provinsi: isValid.provinsi,
          kota_kabupaten: isValid.kota_kabupaten,
          no_telp: isValid.no_telp,
          email_sekolah: isValid.email_sekolah,
          facebook: isValid.facebook,
          jumlah_siswa: isValid.jumlah_siswa,
          gambar: cloudinaryRes.locals.filename,
        };
      } else {
        valid = {
          tipe_sekolah: isValid.tipe_sekolah,
          nama_sekolah: isValid.nama_sekolah,
          alamat: isValid.alamat,
          kode_pos: isValid.kode_pos,
          provinsi: isValid.provinsi,
          kota_kabupaten: isValid.kota_kabupaten,
          no_telp: isValid.no_telp,
          email_sekolah: isValid.email_sekolah,
          facebook: isValid.facebook,
          jumlah_siswa: isValid.jumlah_siswa,
        };
      }
      console.log("isValid", valid);
      const siswa = await this.SiswaRepository.save(valid);
      console.log("ini siswa", siswa);
      return {
        message: "success",
        data: siswa,
      };
    } catch (error) {
      throw error;
    }
  }
})();
