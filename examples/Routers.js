import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App.js';
import Default from './Default.js';
import FormItemInput from './components/FormItemInput';
import FormItemSelect from './components/FormItemSelect';
import FuzzySearch from './components/FuzzySearch';
import FormItemRadioGroup from './components/FormItemRadioGroup';
import FormItemCheckboxGroup from './components/FormItemCheckboxGroup';
import FormItemCascader from './components/FormItemCascader';

class Routers extends React.Component {
  render(){
    return <Router history={browserHistory}>
    <Route path='/' 
      getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, App);}, 'App');}}
      >
        <IndexRoute
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, Default);}, 'Default');}} 
        />
        <Route path='FormItemInput' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FormItemInput);}, 'FormItemInput');}} 
        />
        <Route path='FormItemSelect' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FormItemSelect);}, 'FormItemSelect');}} 
        />
        <Route path='FuzzySearch' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FuzzySearch);}, 'FuzzySearch');}} 
        />
        <Route path='FormItemRadioGroup' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FormItemRadioGroup);}, 'FormItemRadioGroup');}} 
        />
        <Route path='FormItemCheckboxGroup' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FormItemCheckboxGroup);}, 'FormItemCheckboxGroup');}} 
        />
        <Route path='FormItemCascader' 
          getComponent={(location, callback)=>{require.ensure([], ()=>{callback(null, FormItemCascader);}, 'FormItemCascader');}} 
        />
    </Route>

  </Router>;
  }
}

export default Routers;
