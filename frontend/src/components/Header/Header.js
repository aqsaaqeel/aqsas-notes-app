import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import DropDownButton from '../dropdownButton/DropDownButton';

export default function Header() {
  return (
    <Box rowGap="10px">
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Notes App
          </Typography>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Grid>
          <Button color="inherit">My Notes</Button>
          <DropDownButton />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}