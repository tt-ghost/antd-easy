import React from 'react';
import { Link } from 'react-router';
import Navigator from '../Navigator';
import { Layout } from 'antd-easy';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {

  render(){
    return <Layout className='antd-easy-container'>
      <Header className='antd-easy-header'><Link to='/' >Antd-Easy</Link></Header>
      <Content style={{padding: '0 50px', marginTop:'30px'}}>
        <Layout style={{padding: '24px 0', background: '#fff'}}>
          <Sider width={250} className='bg-white'>
            <Navigator location={this.props.location}/>
          </Sider>
          <Content style={{padding: '0 24px', minHeight: 280}}>
            {this.props.children}
          </Content>
        </Layout>
      </Content>
      <Footer className='text-center'>@2017</Footer>
    </Layout>;
  }
}

export default App;
