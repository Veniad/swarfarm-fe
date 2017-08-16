import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
// import { Menu, Dropdown, Icon, Divider } from 'semantic-ui-react';

import { authActions } from 'state/ducks/auth/';

const MainMenu = props =>
  <Menu mode="horizontal">
    <Menu.Item>
      <Link to="/">SWARFARM</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/news">News</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/bestiary">Bestiary</Link>
    </Menu.Item>
  </Menu>;

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(authActions.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
