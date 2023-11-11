import { ImageList, ImageListItem } from '@mui/material';
import { useSelector } from 'react-redux';

export const ImageGallery = () => {
  const { activeNote } = useSelector((state) => state.lifeDiary);

  return (
    <ImageList sx={{ width: '100%' }} cols={3} gap={10}>
      {activeNote?.imagesUrls?.map((url) => (
        <ImageListItem key={url}>
          <img
            srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            alt="note image"
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
