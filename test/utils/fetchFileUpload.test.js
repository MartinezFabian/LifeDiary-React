/* eslint-disable no-undef */
import { fetchFileUpload } from '../../src/utils/fetchFileUpload';

describe('tests in fetchFileUpload.js', () => {
  test('must upload the file correctly to cloudinary', async () => {
    const urlImage =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const resp = await fetch(urlImage);
    const blob = await resp.blob();
    const file = new File([blob], 'image.jpg');

    const secureUrl = await fetchFileUpload(file);

    expect(secureUrl).toContain('https://res.cloudinary.com/');
    expect(secureUrl).toContain('/image/upload/');
  });
});
