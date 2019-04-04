import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
  };

  removeImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.images.map(image => (
          <ImgCard
            removeImage={this.removeImage}
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

