import React from 'react';
import { Form, Button } from 'antd';
import FormItemRadioGroup from 'antd-easy/FormItemRadioGroup';
import FormItemNoLabel from 'antd-easy/FormItemNoLabel';
import formConfig from '../../../formConfig';

const createForm = Form.create;

class FormItemRadioGroupDemo extends React.Component {
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

    this.props.form.config  = formConfig;
    const options = [
      {label: '男', value: 'male'},
      {label: '女', value: 'female'},
      {label: '保密', value: 'secret'}
    ];
    return <Form horizontal>
      <FormItemRadioGroup field='sex' options={options} />
      <FormItemNoLabel>
        <Button type='primary' loading={this.state.loading} onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemRadioGroupDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemRadioGroupDemo);

