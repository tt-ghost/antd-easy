import React from 'react';
import Component from './component';
import Html from '../../../Html';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div>
      <Html codepath='FormItemSelect/Demo01/component.js' mdpath='FormItemSelect/Demo01/README.md' >
        <Component />
      </Html>
    </div>;
  }
}

export default Container;

