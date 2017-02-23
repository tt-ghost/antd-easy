import React from 'react';
import Demo01 from './index.js';
import HTML from '../../../HTML';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div>
      <HTML codepath='FormItemRadio/Demo01/index.js' mdpath='FormItemRadio/Demo01/README.md' >
        <Demo01 />
      </HTML>
    </div>;
  }
}

export default Container;

