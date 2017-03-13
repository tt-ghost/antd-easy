import React from 'react';
import Component from './component';
import Html from '../../../Html';

const basePath = 'FormItemSelect/Demo01/';

class Container extends React.Component {

  render(){
    return <div>
      <Html codepath={`${basePath}component.js`} mdpath={`${basePath}README.md`} configpath={`${basePath}config.js`} >
        <Component />
      </Html>
    </div>;
  }
}

export default Container;

