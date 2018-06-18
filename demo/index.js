import React from 'react';
import ReactDOM from 'react-dom';
import EmptyData from '../src/';
import './demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <EmptyData />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
