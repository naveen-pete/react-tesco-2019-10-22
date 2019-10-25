import React, { Component } from 'react';
import Header from './Header';
import Exercises from './Exercises';
import Footer from './Footer';
import { categories, exercises } from '../store';

class App extends Component {
  state = {
    categories,
    exercises,
    exercise: {},
    category: ''
  }

  getExercisesByCategory = () => {
    const { exercises } = this.state;

    return Object.entries(exercises.reduce((acc, e) => {
      const { muscles } = e;
      acc[muscles] = acc[muscles] ? [...acc[muscles], e] : [e];
      return acc;
    }, {}));
  }

  handleExerciseSelect = (exercise) => {
    this.setState({
      exercise,
      editMode: false
    });
  }

  handleCategorySelect = (category) => {
    this.setState({
      category
    });
  }

  handleExerciseCreate = (exercise) => {
    this.setState(({ exercises }) => {
      return {
        exercises: [
          ...exercises,
          exercise
        ]
      };
    });
  }

  handleExerciseEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id),
      editMode: true
    }));
  }

  handleExerciseEditSubmit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: exercises.map(e => e.id === exercise.id
        ? { ...exercise } : { ...e }),
      exercise,
      editMode: false
    }));
  }


  render() {
    const { categories, exercise, category, editMode } = this.state;
    const exercises = this.getExercisesByCategory();

    return (
      <div>
        <Header
          categories={categories}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          categories={categories}
          exercises={exercises}
          exercise={exercise}
          category={category}
          editMode={editMode}
          onExerciseSelect={this.handleExerciseSelect}
          onExerciseEdit={this.handleExerciseEdit}
          onExerciseEditSubmit={this.handleExerciseEditSubmit}
        />
        <Footer
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
          category={category}
        />
      </div>
    );
  }
}

export default App;
