import React from 'react';

export default class Test extends React.Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div>hello, 我是第一个组件 demo</div>
    );
  }
}
