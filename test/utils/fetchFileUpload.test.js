/* eslint-disable no-undef */

import { v2 as cloudinary } from 'cloudinary';
import { fetchFileUpload } from '../../src/utils/fetchFileUpload';
import { getEnvironments } from '../../src/utils/getEnvironments';

const { VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_API_KEY, VITE_CLOUDINARY_API_SECRET } =
  getEnvironments();

cloudinary.config({
  cloud_name: VITE_CLOUDINARY_CLOUD_NAME,
  api_key: VITE_CLOUDINARY_API_KEY,
  api_secret: VITE_CLOUDINARY_API_SECRET,
  secure: true,
});

describe('tests in fetchFileUpload.js', () => {
  test('must upload the file correctly to cloudinary', async () => {
    // convertir una URL de imagen en un archivo para poder probar 'fetchFileUpload(file)'
    const urlImage =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const resp = await fetch(urlImage);
    const blob = await resp.blob();
    const file = new File([blob], 'image.jpg');

    const secureUrl = await fetchFileUpload(file);

    expect(secureUrl).toContain('https://res.cloudinary.com/');
    expect(secureUrl).toContain('/image/upload/');

    // Obtener el ID de la imagen desde la URL
    const segments = secureUrl.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    // eliminar la imagen de prueba de cloudinary
    const cloudinaryResp = await cloudinary.api.delete_resources(['life_diary/' + imageId]);

    console.log(cloudinaryResp);
  });
});
