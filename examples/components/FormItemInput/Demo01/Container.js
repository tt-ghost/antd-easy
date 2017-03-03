import React from 'react';
import Demo01 from './index.js';
import Html from '../../../Html';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div>
      <Html codepath='FormItemInput/Demo01/index.js' mdpath='FormItemInput/Demo01/README.md' >
        <Demo01 />
      </Html>
    </div>;
  }
}

export default Container;

