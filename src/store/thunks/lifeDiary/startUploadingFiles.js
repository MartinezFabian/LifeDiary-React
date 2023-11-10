import { fetchFileUpload } from '../../../utils/fetchFileUpload';
import { setImagesToActiveNote, setSaving } from '../../slices/lifeDiary/lifeDiarySlice';

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    try {
      const fileUploadPromises = [];

      //Para cada archivo, se agrega la promesa de la función fetchFileUpload al array de promesas.
      for (const file of files) {
        fileUploadPromises.push(fetchFileUpload(file));
      }

      /**
       * La función Promise.all se utiliza para realizar operaciones
       * de manera simultánea (concurrente) en lugar de secuencial
       */

      const imagesUrls = await Promise.all(fileUploadPromises);

      dispatch(setImagesToActiveNote(imagesUrls));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
