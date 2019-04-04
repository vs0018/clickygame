import React, { Component } from "react";
// import "./style.css";

class ImgCard extends Component {
  // Setting this.state.images to the images json array
  state = {
    count: 2
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

render() {
  return (
      <div className="card">
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <div onClick={this.handleDecrement} className="img-container">
            <img alt="" src={this.props.image} />
          </div>
        </div>
      </div>
    );
  }
}


export default ImgCard;
