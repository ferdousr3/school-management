import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

export default function OrientationList() {
  return (
    <List
      sx={{ width: '100%', color:'#fff'}}
      aria-label="contacts"
    >
      <ListItem sx={{display:'grid'}}>
        <ListItemButton sx={{backgroundColor:'#E05A36',marginBottom:"1rem"}}>
          <ListItemIcon>
            <StarIcon sx={{color:""}} />
          </ListItemIcon>
          <ListItemText primary="Orientation Start: 1st january 2023" />
        </ListItemButton>
        <ListItemButton sx={{backgroundColor:'#E05A36'}}>
          <ListItemIcon>
            <StarIcon sx={{color:""}} />
          </ListItemIcon>
          <ListItemText primary="Orientation End: 1st january 2023" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
