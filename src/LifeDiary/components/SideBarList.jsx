import TurnedInNot from '@mui/icons-material/TurnedInNot';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../../store/slices/lifeDiary/lifeDiarySlice';

export const SideBarList = () => {
  const { notes } = useSelector((state) => state.lifeDiary);
  const dispatch = useDispatch();

  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id} disablePadding>
          <ListItemButton onClick={() => dispatch(setActiveNote(note))}>
            <ListItemIcon>{<TurnedInNot></TurnedInNot>}</ListItemIcon>
            <Grid container overflow="hidden">
              <ListItemText
                disableTypography
                primary={note.title}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              />
              <ListItemText
                secondary={note.body}
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              ></ListItemText>
            </Grid>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
