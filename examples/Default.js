import React from 'react';

const docs = [{
  title: 'Ant Design 官网',
  url: 'https://ant.design/docs/react/introduce-cn'
}, {
  title: 'React.js',
  url: 'http://reactjs.cn/react/docs/component-api.html'
}];

class Default extends React.Component {

  render(){
    return <div>
      <h1 className='antd-easy-h1 text-center'>Antd-Easy</h1>
      <div className='mt20 antd-easy-content'>
        欢迎使用 Antd-Easy 组件，本组件基于 ant design 进行再次封装，旨在更便捷的使用。
      </div>
      <h2 className='antd-easy-h2'>关于使用</h2>
      <div className='antd-easy-content'>
        <div className='mb10'>Antd Design的原始组件可以同时使用，直接按 <strong>{'import { Input } from "antd-easy"'}</strong> 这种方式导入即可。
        </div>
        <div className='mb10'>关于Ant Design 组件的详细API，请参考 <a target='_blank' href={docs[0].url}>{docs[0].title}</a>。</div>
      </div>
      <h2 className='antd-easy-h2'>相关文档</h2>
      <div className='antd-easy-content'>
        <ul>
          {docs.map((item, k) => {
            return <li key={k}><a target='_blank' href={item.url}>{item.title}</a></li>;
          })}
        </ul>
      </div>
    </div>;
  }
}

Default.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Default;
