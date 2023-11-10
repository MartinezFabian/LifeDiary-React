import { fetchFileUpload } from '../../../utils/fetchFileUpload';
import { setSaving } from '../../slices/lifeDiary/lifeDiarySlice';

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    try {
      await fetchFileUpload(files[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
