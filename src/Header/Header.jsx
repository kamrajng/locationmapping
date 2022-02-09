import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        Village View
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            See more view 
          </Typography>
          {/* <Autocomplete > */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;