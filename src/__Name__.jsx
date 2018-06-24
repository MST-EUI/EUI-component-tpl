import { Component } from 'react';
<% if (i18n) { %>
  import i18n from 'i18n';
<% } %>
import './<%- Name %>.scss';

export default class <%- Name %> extends Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="eui-<%= name %>">
        Hello, Component <%= name %>
      </div>
    );
  }
}
