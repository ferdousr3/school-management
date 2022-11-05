import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

export default function InsetList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360}}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon sx={{color:""}} />
          </ListItemIcon>
          <ListItemText primary="Our online courses are built in partnership with technology leaders and are relevant to industry needs. " />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItemButton>
      </ListItem> */}
    </List>
  );
}
