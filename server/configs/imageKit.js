import ImageKit from "imageKit";

let instance;

export const getImageKit = () => {
  if (!instance) {
    instance = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  }
  return instance;
};
