import React from 'react';
import Component from './component';
import Html from '../../../Html';

const basePath = 'FuzzySearch/Demo01/';

class Container extends React.Component {

  render(){
    return <Html
            codepath={`${basePath}component.js`}
            mdpath={`${basePath}README.md`}
            configpath={`${basePath}config.js`} >
            <Component />
          </Html>;
  }
}

export default Container;

