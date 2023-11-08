import TurnedInNot from '@mui/icons-material/TurnedInNot';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

export const SideBarList = () => {
  const { notes } = useSelector((state) => state.lifeDiary);

  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id} disablePadding>
          <ListItemButton>
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
