import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from './CreateDialog';

const styles = {
  heading: {
    flex: 1
  }
}

const Header = ({ categories, onExerciseCreate }) => {
  return <AppBar position="relative" color="primary">
    <Toolbar>
      <Typography variant="h6" style={styles.heading}>
        Exercises App
      </Typography>

      <CreateDialog
        categories={categories}
        onExerciseCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>;
}

export default Header;
