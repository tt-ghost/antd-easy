import React from 'react';
import { Form, Button, FormItemSelect, FormItemNoLabel } from 'antd-easy';
import config from '../../../config';

const createForm = Form.create;

class FormItemSelectDemo extends React.Component {
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
    const options = [{label: '北京', value: 'beijing'}, {label: '上海', value: 'shanghai'}];

    return <Form horizontal>
      <FormItemSelect field='location' options={options} />
      <FormItemNoLabel>
        <Button type='primary' loading={this.state.loading} onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemSelectDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemSelectDemo);

