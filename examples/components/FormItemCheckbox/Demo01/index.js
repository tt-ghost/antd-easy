import React from 'react';
import { Form, Button } from 'antd';
import FormItemCheckbox from 'antd-easy/FormItemCheckbox';
import FormItemNoLabel from 'antd-easy/FormItemNoLabel';
import formConfig from '../../../formConfig';

const createForm = Form.create;

class FormItemCheckboxDemo extends React.Component {
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
      {label: '红色', value: 'red'},
      {label: '绿色', value: 'green'},
      {label: '蓝色', value: 'blue', disabled: true}
    ];
    return <Form horizontal>
      <FormItemCheckbox field='color' options={options} />
      <FormItemNoLabel>
        <Button type='primary' loading={this.state.loading} onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemCheckboxDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemCheckboxDemo);

