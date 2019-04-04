import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.images.map(image => (
          <ImgCard
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

