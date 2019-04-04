import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class ImgCard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 2
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render(props) {
    return (
      <div className="card">
        <div onClick={this.handleDecrement} className="img-container">
          <img alt="" src={props.image} />
        </div>
      </div>
    );
  }
}

export default ImgCard;
