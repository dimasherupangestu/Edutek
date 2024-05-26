import { v2 as cloudinary } from "cloudinary";

export default new (class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: "debqy6i4f",
      api_key: "258826236137417",
      api_secret: "uLZI7bTO9H6X5iCni3NgzV-okjY",
      secure: true,
    });
  }

  async destination(gambar: string): Promise<any> {
    try {
      return await cloudinary.uploader.upload(`src/uploads/${gambar}`, {
        folder: "siswa",
        tags: ["siswa"],
      });
    } catch (error) {
      throw error;
    }
  }
})();
