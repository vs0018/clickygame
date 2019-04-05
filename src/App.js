import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    "score": 0,
    "highscore": 0
  };

  // Shuffle memory game images
  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  resetGame = () => {
    this.setState({
      score: 0,
      highscore: this.state.highscore,
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImgs = this.shuffleArray(images);
    this.setState({ images: shuffledImgs });
  };

  inreaseScore = () => {
    this.setState({ score: this.state.score + 1});
  }

  // handleDecrement decreases this.state.count by 1
  handleClick = id => {
    if (this.state.count > 0) {
    // Decrements images click count
    this.setState({ count: this.state.count - 1 });
    };
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game, Score: {this.state.score}</Title>
        {this.state.images.map(image => (
          <ImgCard
            id={image.id}
            key={image.id}
            image={image.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

