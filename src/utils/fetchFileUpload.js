export async function fetchFileUpload(file) {
  if (!file) throw new Error('Error: no file to upload');

  const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`;

  const formData = new FormData();
  formData.append('upload_preset', 'life_diary_react');
  formData.append('file', file);

  try {
    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();

      console.log(data);

      return data;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
