import React, { Component, Fragment } from 'react';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from './Form';

class CreateDialog extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleExerciseCreate = (exercise) => {
    this.handleToggle();
    this.props.onExerciseCreate(exercise);
  }

  render() {
    const { open } = this.state;
    const { categories } = this.props;

    return <Fragment>
      <Fab size="small" onClick={this.handleToggle}>
        <Add />
      </Fab>
      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle id="form-dialog-title">
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>

          <Form
            categories={categories}
            onExerciseSubmit={this.handleExerciseCreate}
          />

        </DialogContent>
      </Dialog>
    </Fragment>;
  }
}

export default CreateDialog;
