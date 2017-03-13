import React from 'react';
import { Form, Button, FuzzySearch, FormItemNoLabel } from 'antd-easy';
import config from '../../../config';

const createForm = Form.create;

class FuzzySearchDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  getChildContext() {
    return { form: this.props.form };
  }

  onSubmit(){
    this.props.form.validateFieldsAndScroll({ force: true }, (errors, values) => {
      if (errors) {return values;}
      this.setState({loading: true});
      setTimeout(() => {this.setState({loading: false});}, 2000);
    });
  }

  render(){

    this.props.form.config  = config;
    
    return <Form horizontal>
      <FuzzySearch field='user' render={(item) => {
        return `${item.en}(${item.name} ${item.location}人 今年 ${item.age} 岁)`;
      }}/>
      <FormItemNoLabel>
        <Button type='primary' loading={this.state.loading} onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FuzzySearchDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FuzzySearchDemo);

