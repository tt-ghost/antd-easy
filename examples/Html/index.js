import React from 'react';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import highlight from 'highlight.js';
import { Collapse } from 'antd-easy';
import fetch from '../fetch';
import { baseURL } from '../constants';
import 'highlight.js/styles/color-brewer.css';

const Panel = Collapse.Panel;

class HTML extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code){
        return highlight.highlightAuto(code).value;
      }
    });
    this.state = {
      text: '',
      code: ''
    };
  }

  getFile(filePath, type){
    const language = this.props.language||'javascript';

    return fetch(baseURL + `file?name=${filePath}`, {method: 'GET'})
    .then(res => {
      return res.text();
    })
    .then(res => {
      const willChangeState = type === 'code' ? 
        {code: '\n```'+language+'\n'+res+'```\n'} : {text: res};
      this.setState(willChangeState);
      return res;
    });
  }

  componentDidMount() {
    const { codepath, mdpath } = this.props;

    codepath && this.getFile(codepath, 'code');
    mdpath && this.getFile(mdpath, 'markdown');
  }

  render(){
    const { code, text } = this.state;
    const _code = marked(code||'');

    return <div>
      {this.props.children}
      <ReactMarkdown source={text} />
      <Collapse bordered={false} defaultActiveKey={[]}>
        <Panel header="Code" key="1">
          <div className='antd-easy-code-container' dangerouslySetInnerHTML={{__html: _code}} />
        </Panel>
      </Collapse>
    </div>;
  }
}

export default HTML;

