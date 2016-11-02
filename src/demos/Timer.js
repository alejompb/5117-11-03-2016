import React from 'react';

// code from here: https://facebook.github.io/react/
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  // // doesn't use `setState`
  // tickBroken() {
  //   this.state.secondsElapsed = this.state.secondsElapsed + 1;
  //   console.log('tick', this.state.secondsElapsed);
  // }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <b>{this.props.title}</b>
        <br/>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
}

export default Timer;
