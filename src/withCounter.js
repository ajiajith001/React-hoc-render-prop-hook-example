import React from "react";

function withCounter(WrappedComponent, countStepper = 1) {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + countStepper
      }));
    };

    render() {
      // console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
}

export default withCounter;
