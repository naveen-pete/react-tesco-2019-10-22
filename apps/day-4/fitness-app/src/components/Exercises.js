import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Edit,
  Delete
} from '@material-ui/icons';
import Form from './Form';

const styles = {
  paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    height: 500,
    overflowY: 'auto'
  },
  category: {
    textTransform: 'capitalize'
  },
  subtitle: {
    marginTop: 20
  }
};

const Exercises = ({
  categories,
  exercises,
  exercise,
  category,
  editMode,
  onExerciseSelect,
  onExerciseEdit,
  onExerciseEditSubmit
}) => {
  const {
    title = 'Welcome!',
    description = 'Please select an exercise.'
  } = exercise;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Paper style={styles.paper}>
          {exercises.map(([cat, exercises]) => {
            let ui = null;
            if (!category || category === cat) {
              ui = <Fragment key={cat}>
                <Typography
                  variant="h5"
                  style={styles.category}
                >
                  {cat}
                </Typography>
                <List component="ul">
                  {exercises.map((ex) =>
                    <ListItem
                      button
                      key={ex.id}
                      onClick={() => onExerciseSelect(ex)}
                    >
                      <ListItemText primary={ex.title} />

                      <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => onExerciseEdit(ex.id)}>
                          <Edit />
                        </IconButton>
                        <IconButton edge="end">
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>

                    </ListItem>
                  )}
                </List>
              </Fragment>;
            }
            return ui;
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper style={styles.paper}>
          {!editMode ?
            <Fragment>
              <Typography variant="h4">
                {title}
              </Typography>
              <Typography variant="subtitle2" style={styles.subtitle}>
                {description}
              </Typography>
            </Fragment>
            :
            <Form
              exercise={exercise}
              categories={categories}
              onExerciseSubmit={onExerciseEditSubmit}
            />
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Exercises;
