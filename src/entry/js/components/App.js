import React from 'react';

export default class App extends React.Component {
  state = {
    counter: 0,
  };

  asyncPrivateMethod = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, Math.random() * 3000);
    });
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleClickButton = () => {
    Promise.all([
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
      this.asyncPrivateMethod(),
    ]);
  };

  render() {
    return (
      <button onClick={this.handleClickButton}>
        Click me! {this.state.counter}
      </button>
    );
  }
}
