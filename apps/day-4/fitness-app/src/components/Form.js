import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const styles = {
  formControl: {
    width: 250
  }
};

class Form extends Component {
  state = this.initStateFromExercise();

  initStateFromExercise() {
    const { exercise } = this.props;

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { exercise } = props;
    if (!exercise) {
      return null;
    }

    const { id, title, description, muscles } = exercise;
    if (id !== state.id) {
      return {
        id,
        title,
        description,
        muscles
      };
    }

    return null;
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleClick = () => {
    const exercise = {
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
    };

    this.props.onExerciseSubmit(exercise);
  }

  render() {
    const { categories, exercise } = this.props;
    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label="Title"
          margin="normal"
          value={title}
          style={styles.formControl}
          onChange={this.handleChange('title')}
        />
        <br />
        <FormControl style={styles.formControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(c => {
              return <MenuItem key={c} value={c}>
                {c}
              </MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Description"
          multiline
          rows="4"
          margin="normal"
          style={styles.formControl}
          value={description}
          onChange={this.handleChange('description')}
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={this.handleClick}
        >
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}

export default Form;
