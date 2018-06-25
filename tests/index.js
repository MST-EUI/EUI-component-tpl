import React from 'react';
import Enzyme, { mount } from 'enzyme';
import expect from 'expect.js';
import Adapter from 'enzyme-adapter-react-14';

import EmptyData from '../src';

// init browser gloabl vars for node env by jsdom
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
// browser global var init end

Enzyme.configure({ adapter: new Adapter() });

describe('EmptyData', () => {
  it('it should render correctly', () => {
    mount(<EmptyData />);
  });
  it('props', () => {
    const wrapper = mount(<EmptyData style={{ width: '400px' }} >
      <div className="custom-text">暂无课程信息，请联系您的班主任</div>
    </EmptyData>);
    expect(wrapper.find('.eui-empty-data-content')).to.have.length(1);
    expect(wrapper.find(EmptyData)).to.have.length(1);
    expect(wrapper.find(EmptyData).find('.custom-text')).to.have.length(1);
  });
});
