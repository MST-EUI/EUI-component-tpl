import React from 'react';
import i18n from './i18n';

import './style/ie8.scss';
import './style/index.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

export default class EmptyData extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    i18n: PropTypes.string,
  };

  static defaultProps = {
    message: i18n[i18nDefault].description,
    i18n: i18nDefault,
  };

  render() {
    const { message } = this.props;
    return (
      <div className="eui-empty-data">{message}</div>
    );
  }
}
