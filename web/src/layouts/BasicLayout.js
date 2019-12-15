import React from 'react'; 
import withRouter from 'umi/withRouter';
import {
  Layout,
} from 'antd';
import SiteHeader from './SiteHeader';
import styles from './BasicLayout.less';

const { Content, Footer } = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentYear: new Date().getFullYear()
  }

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <SiteHeader/>
        <Content>
          {children}
        </Content>
        <Footer className={styles.pageFooter}>
          Authur
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(BasicLayout);
