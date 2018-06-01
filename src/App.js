import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import WordsInput from './components/WordsInput.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0]
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  getWords() {
    const words = [];

    console.log(`this is the array of words: ${this.state.selectedMadLib.words}`);

    this.state.selectedMadLib.words.map((wordObject) => {
      words.push(wordObject.key);
    });
    return (
      words
    )
  }

  render() {

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        {/*
          Render your form with input values
        */

          < WordsInput
            words = {this.getWords()}
            updateMadLib = {this.updateWord}
          />

        }
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
