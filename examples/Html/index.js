import React from 'react';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import highlight from 'highlight.js';
import { Tabs } from 'antd-easy';
import fetch from '../fetch';
import { baseURL } from '../constants';
import 'highlight.js/styles/googlecode.css';

const TabPane = Tabs.TabPane;

class Html extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: true,
      highlight: function(code){
        return highlight.highlightAuto(code).value;
      }
    });
    this.state = {
      text: '',
      jsx: '',
      config: ''
    };
  }

  componentDidMount() {
    const { mdpath } = this.props;

    // codepath && this.getFile(codepath, 'code');
    mdpath && this.getFile(mdpath, 'markdown', 'text');
  }

  getFile(filePath, type, stateField){
    const language = this.props.language||'js';

    return fetch(baseURL + `file?name=${filePath}`, {method: 'GET'})
    .then(res => {
      return res.text();
    })
    .then(res => {
      const willChangeState = type === 'code' ? 
        {[stateField]: '\n```'+language+'\n'+res+'```\n'} : {[stateField]: res};
      this.setState(willChangeState);
      return res;
    });
  }

  onTabChange(key) {
    const { codepath, configpath } = this.props;
    if(key === 'jsx' && codepath && !this.state.jsx){
      this.getFile(codepath, 'code', 'jsx');
    }
    if(key === 'config' && configpath && !this.state.config){
      this.getFile(configpath, 'code', 'config');
    }
  }

  render(){
    const { jsx, text, config='暂无内容' } = this.state;
    const { configpath } = this.props;
    const _jsx = marked(jsx||'');
    const _config = marked(config||'');

    return <div className='demo-item-container'>
      {this.props.children}
      <Tabs defaultActiveKey="doc" onChange={this.onTabChange.bind(this)}>
        <TabPane tab="文档" key="doc">
          <ReactMarkdown source={text} />
        </TabPane>
        <TabPane tab="示例源码" key="jsx">
          <div className='antd-easy-code-container' dangerouslySetInnerHTML={{__html: _jsx}} />
        </TabPane>
        {configpath ? <TabPane tab="config.js" key="config">
          <div className='antd-easy-code-container' dangerouslySetInnerHTML={{__html: _config}} />
        </TabPane> : null }
      </Tabs>
    </div>;
  }
}

export default Html;

