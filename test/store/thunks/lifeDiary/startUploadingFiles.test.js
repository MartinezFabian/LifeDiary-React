/* eslint-disable no-undef */
import {
  setImagesToActiveNote,
  setSaving,
} from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';
import { startUploadingFiles } from '../../../../src/store/thunks/lifeDiary/startUploadingFiles';

describe('tests in startUploadingFiles.js', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('must upload the files and set the URLs to the active note', async () => {
    const urlImage =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const resp = await fetch(urlImage);
    const blob = await resp.blob();
    const file = new File([blob], 'image.jpg');

    const files = [file];

    await startUploadingFiles(files)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(setImagesToActiveNote(expect.any(Array)));
  });
});
