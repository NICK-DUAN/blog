import React from 'react';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';

import styles from './SiteHeader.less';

class SiteHeader extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu 
        mode="horizontal"
        onClick={this.handleClick} 
        className={styles.menuCenter}
        selectedKeys={[this.state.current]} 
      >
        <Menu.Item key="home">
          <Link to='/'><Icon type="home" />圈子</Link>
        </Menu.Item>
        <Menu.Item key="mime">
          <Icon type="home" />我的地盘
        </Menu.Item>
        <Menu.Item key="photo">
          <Icon type="home" />相册
        </Menu.Item>
        <Menu.Item key="users" className={styles.userLogo}>
          <Link to='/users'><Icon type="user" />用户</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SiteHeader;