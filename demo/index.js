/*
* annotation like `placeholder begin *** and
* placeholder end ***` is required for generate eui manual, please keep it
*/
import React from 'react';
import ReactDOM from 'react-dom';

/* placeholder begin src */
import EmptyData from '../src';
/* placeholder end src */

import './index.scss';

/* placeholder begin class */
class Demo extends React.Component {
  render() {
    return (
      <div className="demo eui-empty-data-demo">
        <EmptyData style={{ width: '200px' }} />
      </div>
    );
  }
}
/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
/* placeholder end ReactDOM */
