import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

// Shuffle memory game images
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    "currentScore": 0,
    "topScore": 0,
    "announce": "",
    "clicked": []
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      announce: "Sorry, try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImgs = shuffleArray(images);
    this.setState({ images: shuffledImgs });
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      announce: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ announce: "You win!" });
    }
    this.handleShuffle();
  };

  // handleDecrement decreases this.state.count by 1
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetGame();
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Title>Clicky Game</Title>
        {this.state.images.map(image => (
          <ImgCard
            key={image.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            resetGame={this.resetGame}
            handleShuffle={this.handleShuffle}
            id={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

