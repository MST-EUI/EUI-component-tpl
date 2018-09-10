import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import './style/index.scss';

const { PropTypes } = React;

export default class EmptyData extends React.Component {
  static displayName = 'eui-empty-data';

  static propTypes = {
    locale: PropTypes.string,
    icon: PropTypes.string,
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    locale: 'zh-cn',
    icon: '//cdn.ewt360.com/ewt360/images/images/searchno.jpg?t=201806222330',
    prefixCls: 'eui-empty-data',
    theme: 'default',
    style: {},
    className: '',
  };

  render() {
    const {
      prefixCls,
      locale,
      icon,
      style,
      className,
    } = this.props;

    return (
      <div
        className={classnames({ [prefixCls]: true }, { [className]: !!className })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${icon})`,
          }}
        />
        <div className={`${prefixCls}-content`}>
          {i18n[locale].description}
        </div>
      </div>
    );
  }
}
